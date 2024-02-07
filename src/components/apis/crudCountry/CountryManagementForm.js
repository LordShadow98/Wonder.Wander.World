import React, { useState } from 'react';
import './CountryManagementForm.css';

const CountryManagementForm = () => {
  const [inputData, setInputData] = useState({
    countryCode: '',
  });

  const [countryData, setCountryData] = useState({
    countryCode: '',
    countryName: '',
    language: '',
    continent: '',
    capital: '',
    currency: '',
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
      capital: '',
      currency: '',
    });
  };

  const handleUpdate = () => {
    // Lógica para enviar los datos al servidor y actualizar el país
    // Se implementará más adelante cuando agregues la funcionalidad de actualizar países
    console.log('Actualizar país:', countryData);
  };

  const handleQuery = () => {
    // Lógica para consultar datos del servidor (MongoDB)
    // Actualiza el estado de countryData con los datos obtenidos
    // Implementa esta lógica según cómo obtienes los datos de la base de datos
    const mockCountryData = {
      countryCode: 'ES',
      countryName: 'Spain',
      language: 'Spanish',
      continent: 'Europe',
      capital: 'Madrid',
      currency: 'Euro',
    };

    setCountryData(mockCountryData);
  };

  return (
    <div className='managment--country'>
      <div className="country--code">
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

        <label>Nombre:</label>
        <input
          type="text"
          name="countryName"
          value={countryData.countryName}
          onChange={handleInputChange}
        />

        <div className="obtain-information-tow">
          <label>Lengua:</label>
          <input
            type="text"
            name="language"
            value={countryData.language}
            onChange={handleInputChange}
          />

          <label>Continente:</label>
          <input
            type="text"
            name="continent"
            value={countryData.continent}
            onChange={handleInputChange}
          />

          {/* Nuevos campos para la gestión */}
          <label>Capital:</label>
          <input
            type="text"
            name="capital"
            value={countryData.capital}
            onChange={handleInputChange}
          />

          <label>Moneda:</label>
          <input
            type="text"
            name="currency"
            value={countryData.currency}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="btn-tow">
        <button className="btn--delete" onClick={handleClear}>Eliminar</button>
        <button className='btn--update' onClick={handleUpdate}>Actualizar</button>
      </div>
    </div>
  );
};

export default CountryManagementForm;
