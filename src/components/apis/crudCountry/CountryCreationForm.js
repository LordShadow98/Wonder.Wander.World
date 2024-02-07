import React, { useState } from 'react';
import './CountryCreationForm.css';

const CountryForm = () => {
  // Estado para almacenar el código del país ingresado por el usuario
  const [inputData, setInputData] = useState({
    countryCode: '',
  });

  // Estado para almacenar los valores de los demás campos del formulario
  const [countryData, setCountryData] = useState({
    countryCode: '',
    countryName: '',
    language: '',
    continent: '',
  });

  // Función para manejar los cambios en el código del país ingresado por el usuario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  // Función para manejar el evento de clic en el botón "Limpiar"
  const handleClear = () => {
    // Restablecer el código del país ingresado por el usuario y otros campos a un estado inicial vacío
    setInputData({
      countryCode: '',
    });
    setCountryData({
      countryCode: '',
      countryName: '',
      language: '',
      continent: '',
    });
  };

  // Función para manejar el envío del formulario (se implementará más adelante)
  const handleCreate = () => {
    // Lógica para enviar los datos al servidor (MongoDB)
    // Esta parte se implementará posteriormente cuando agregues la funcionalidad de crear países
    console.log('Crear país:', countryData);
  };

  // Función para manejar el evento de clic en el botón "Consultar" (se implementará más adelante)
  const handleQuery = () => {
    // Lógica para consultar datos del servidor (MongoDB)
    // Esta parte se implementará posteriormente cuando agregues la funcionalidad de consultar países
    console.log('Consultar países');
  };

  return (
    <div className='creation--country'>
      <div className="country--code">
        {/* Input para el código del país */}
        <label>Código del país:</label>
        <input
          type="text"
          name="countryCode"
          value={inputData.countryCode}
          onChange={handleInputChange}
        />

        <button className="btn-consult" onClick={handleQuery}>Consultar</button>
      </div>

      <div className="obtain-information">
        <label>Código del país:</label>
        <input
          type="text"
          name="countryCode"
          value={countryData.countryCode}
          onChange={handleInputChange}  // Puedes decidir si quieres que este input sea editable o no
        />

        {/* Input para el nombre del país */}
        <label>Nombre:</label>
        <input
          type="text"
          name="countryName"
          value={countryData.countryName}
          onChange={handleInputChange}
        />

        <div className="obtain-information-tow">

          {/* Input para la lengua */}
          <label>Lengua:</label>
          <input
            type="text"
            name="language"
            value={countryData.language}
            onChange={handleInputChange}
          />

          {/* Input para el continente */}
          <label>Continente:</label>
          <input
            type="text"
            name="continent"
            value={countryData.continent}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="btn-tow">
        <button className="btn--clear" onClick={handleClear}>Limpiar</button>
        <button className='btn--create' onClick={handleCreate}>Crear</button>
      </div>
    </div>
  );
};

export default CountryForm;
