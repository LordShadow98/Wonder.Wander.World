import React, { useState } from 'react';
import './CountryManagementForm.css';
import axios from 'axios';

const CountryManagementForm = () => {
  const [inputData, setInputData] = useState({
    code: '',
  });

  const [countryData, setCountryData] = useState({
    code: '',
    name: '',
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
      code: '',
    });
    setCountryData({
      code: '',
      name: '',
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

  const handleQuery = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)
    try {
      console.log('Realizando solicitud GET a la API...');
      const response = await axios.get(`http://localhost:3002/country/${inputData.code}`);
      console.log('Respuesta de la API:', response.data);
      setCountryData(response.data.country); // Asegúrate de ajustar la estructura de tu respuesta según tu API
    } catch (error) {
      console.error('Error al consultar el país:', error);
    }
  };

  return (
    <div className='managment--country'>
      <form action="" className="consul--country">
        <div>
          {/* Input para llamar país por código */}
          <label>Código país </label>
          <input type="text" name="code" value={inputData.code} onChange={handleInputChange} />
          <button className="btn-consult" onClick={handleQuery}>Consultar</button>
        </div>
      </form>

      <div className="modification--info">
        <label>Código país </label>
        <input type="text" name="code" value={countryData.code} readOnly />

        <label>Nombre </label>
        <input type="text" name="name" value={countryData.name} readOnly />

        <label>Lengua </label>
        <input type="text" name="language" value={countryData.language} readOnly />

        <label>Continente </label>
        <input type="text" name="continent" value={countryData.continent} readOnly />

        <label>Capital:</label>
        <input type="text" name="capital" value={countryData.capital} readOnly />

        <label>Moneda:</label>
        <input type="text" name="currency" value={countryData.currency} readOnly />
      </div>

      <div className="btn-tow">
        <button className="btn--delete" onClick={handleClear}>Eliminar</button>
        <button className='btn--update' onClick={handleUpdate}>Actualizar</button>
      </div>
    </div>
  );
};

export default CountryManagementForm;
