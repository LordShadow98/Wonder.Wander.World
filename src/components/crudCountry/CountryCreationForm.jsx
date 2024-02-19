import React, { useState } from 'react';
import './CountryCreationForm.css';
import axios from 'axios';


const CountryForm = () => {
  const [inputData, setInputData] = useState({
    countryCode: '',
  });

  const [countryData, setCountryData] = useState({
    countryCode: '',
    countryName: '',
    language: '',
    continent: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };


  const handleClear = () => {
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
  const handleCreate = async () => {
    try {
      const response = await fetch('URL_DE_TU_API/country', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(countryData),
      });
  
      const result = await response.json();
      console.log(result.message);
  
      // Puedes realizar acciones adicionales después de la creación si es necesario
  
    } catch (error) {
      console.error('Error al crear el país:', error);
    }
  };
  
  // Función para manejar el evento de clic en el botón "Consultar" (se implementará más adelante)
  const handleQuery = async () => {
    try {
      console.log('Realizando solicitud GET a la API...');
      const response = await axios.get(`URL_DE_TU_API/country/`);
      console.log('Respuesta de la API:', response.data);
      setCountryData(response.data.country);  // Asegúrate de ajustar la estructura de tu respuesta según tu API
    } catch (error) {
      console.error('Error al consultar el país:', error);
    }
  };
  

  return (
    <div className='creation--country'>
      <form action="" className="form--country--code">
        <div>
          {/* Input para el código del país */}
          <label>Código país </label>
          <input type="text" name="countryCode" value={inputData.countryCode} onChange={handleInputChange} />
          <button className="btn-consult" onClick={handleQuery}>Consultar</button>
        </div>
      </form>

      <div className="obtain-information">

        <label>Código </label>
        <input type="text" name="countryCode" value={countryData.countryCode} onChange={handleInputChange} />

        <label>Nombre </label>
        <input type="text" name="countryName" value={countryData.countryName} onChange={handleInputChange} />

        <label>Lengua </label> <input type="text" name="language" value={countryData.language} onChange={handleInputChange} />
        <label>Continente </label> <input type="text" name="continent" value={countryData.continent} onChange={handleInputChange} />
      </div>

      <div className="btn-tow">
        <button className="btn--clear" onClick={handleClear}>Limpiar</button>
        <button className='btn--create' onClick={handleCreate}>Crear</button>
      </div>
    </div>
  );
};

export default CountryForm;
