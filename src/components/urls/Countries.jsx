import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "../urls/Countries.css";

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
    const API_KEY = "DE5knpmSuLuDyAZQo-yFw847oJSTBQLGLcRvZ9SCxM8";
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
  // const mostrarInformacion = (country) => {
  //   alert(
  //     `País: ${country.name}\nBandera: https://flagsapi.com/${country.code}
  //     /flat/64.png\nContinente:
  //     ${country.continent.name}\nIdioma:
  //      ${country.languages.name[0]?.name}\nMoneda:
  //       ${country.currencies.join(",")}`
  //   );
  // };
  
  return (
    <div className="main__content">
      <div className="main__content--grid">
        {data.countries.map((country, index) => (
          // <div className="" key={index} onClick={() => mostrarInformacion(country)}>
            <div className="card">
              <div className="image">
                <div className="image-onli">
                  <img className="ima" src={countryImages[country.name]} alt={country.name} />
                </div>
              </div>
              <div className="info">
                <img className="fiags-image" alt="" src={`https://flagsapi.com/${country.code}/flat/64.png`} />
                <div className="country-details">
                  <p className="p1">{country.name}</p>
                  <p className="p2">{country.continent.name}</p>
                </div>
              </div>
            </div>
          //  </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;
