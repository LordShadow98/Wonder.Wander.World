import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "../urls/Countries.css";
import Swal from 'sweetalert2';
import SearchBar from "../serchBar/SearchBar";

const GET_ALL_COUNTRIES = gql`
  query countries {
    countries {
      code
      name
      currencies
      continent {
        name
      }
      languages {
        name
      }
    }
    continents {
      name
    }
  }
`;

function Countries() {
  const { data, loading, error } = useQuery(GET_ALL_COUNTRIES);
  const [countryImages, setCountryImages] = useState({});

  if (loading) return <p>loading..</p>;
  if (error) return <p>Error: {error.message}</p>;

  const buscarImagen = async (countryName) => {
    const API_KEY = "SQKbkCM0E01KfJIz77kiXA0zOTet7C1NN5y7ql8-F-g";
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${countryName}&per_page=1`;

    const response = await fetch(URL);
    const data = await response.json();
    return data.results[0]?.urls?.regular;
  };

   const obtenerImagenesPaises = async () => {
     const images = {};
     await Promise.all(
       data.countries.map(async (country) => {
         const imageUrl = await buscarImagen(country.name);
         images[country.name] = imageUrl;
       })
     );
     setCountryImages(images);
   };

   if (data && countryImages) {
     obtenerImagenesPaises();
   }
 
const mostrarInformacion = (country) => {
  const languageName = country.languages.length > 0 ? country.languages[0].name : "N/A";
  const message = `País:
  ${country.name}\nBandera: https://flagsapi.com/
  ${country.code}/flat/64.png\nContinente: 
  ${country.continent.name}\nIdioma: 
  ${languageName}\nMoneda: 
  ${country.currencies.join(", ")}`;
  
  Swal("Información del país", message, "info");
};

return (
  <div className="main__content">
    <SearchBar />
    <div className="main__content--grid">
      {data.countries.map((country, index) => (
        <div className="card" key={index}>
          <div className="image">
            <div className="image-onli">
              <img className="ima" src={countryImages[country.name]} alt={country.name} />
            </div>
          </div>
          <div className="info" onClick={() => mostrarInformacion(country)}>
            <img className="flags-image" alt="" src={`https://flagsapi.com/${country.code}/flat/64.png`} />
            <div className="country-details">
              <p className="p1">{country.name}</p>
              <p className="p2">{country.continent.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Countries;
