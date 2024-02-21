import React, { useState } from "react";
import "./CountryCreationForm.css";
import axios from "axios";

const CountryForm = () => {
  const [inputData, setInputData] = useState({
    countryCode: "",
  });

  const [countryData, setCountryData] = useState({
    countryCode: "",
    countryName: "",
    language: "",
    continent: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleClear = () => {
    setInputData({
      countryCode: "",
    });
    setCountryData({
      countryCode: "",
      countryName: "",
      language: "",
      continent: "",
    });
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post("", countryData);
      console.log(response.data.message);

      // Puedes realizar acciones adicionales después de la creación si es necesario
    } catch (error) {
      console.error("Error al crear el país:", error);
    }
  };

  const handleQuery = async () => {
    try {
      setLoading(true);
  
      console.log("Realizando solicitud GET a la API...");
      const response = await axios.post(
        "https://countries.trevorblades.com/",
        {
          query: `
            query GetCountryByCode($code: ID!) {
              country(code: $code) {
                code
                name
                languages {
                  name
                }
                continent {
                  name
                }
              }
            }
          `,
          variables: {
            code: inputData.countryCode,
          },
        }
      );
  
      console.log("Respuesta de la API:", response.data);
  
      setCountryData({
        countryCode: response.data.data.country.code,
        countryName: response.data.data.country.name,
        language: response.data.data.country.languages[0]?.name || "",
        continent: response.data.data.country.continent.name || "",
      });
    } catch (error) {
      console.error("Error al consultar el país:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="creation--country">
      <form action="" className="form--country--code">
        <div>
          {/* Input para el código del país */}
          <label>Código país </label>
          <input
            type="text"
            name="countryCode"
            value={inputData.countryCode}
            onChange={handleInputChange}
          />
          <button className="btn-consult" onClick={handleQuery} disabled={loading}>
            Consultar
          </button>
        </div>
      </form>

      <div className="obtain-information">
        <label>Código </label>
        <input
          type="text"
          name="outcountryCode"
          value={countryData.countryCode}
          onChange={handleInputChange}
        />
        <label>Nombre </label>
        <input
          type="text"
          name="countryName"
          value={countryData.countryName}
          onChange={handleInputChange}
        />
        <label>Lengua </label>{" "}
        <input
          type="text"
          name="language"
          value={countryData.language}
          onChange={handleInputChange}
        />
        <label>Continente </label>{" "}
        <input
          type="text"
          name="continent"
          value={countryData.continent}
          onChange={handleInputChange}
        />
      </div>

      <div className="btn-tow">
        <button className="btn--clear" onClick={handleClear}>
          Limpiar
        </button>
        <button className="btn--create" onClick={handleCreate}>
          Crear
        </button>
      </div>
    </div>
  );
};

export default CountryForm;
