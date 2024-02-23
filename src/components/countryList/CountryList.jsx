
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery,gql } from "@apollo/client";
import SearchBar from "../serchBar/SearchBar";
import "../countryList/CountryList.css";
import "../urls/Countries";
// import Swal from "sweetalert2";


const  viewCountry= gql`
   query countries {
     countries {
       code
       name
       capital
       currencies
       continent {
         name
       }languages {
         name
       }
     }
     continents {
       name
     }
  }
 `;


  const CountryList = () => {
  const { data } = useQuery(viewCountry);
  const [ setSearchTerm] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  const [lista,setLista] = useState([]);
  const [countryImages, setCountryImages] = useState({});

  useEffect(() => {
    const obtenerPaises = async () => {
      try {
        const res = await axios.get("http://localhost:3002/country");
        setLista(res.data.country);
        setSearchResults(res.data.country);
        // Obtener imágenes de Unsplash y actualizar el estado de countryImages
        const images = {};
        for (const country of res.data.country) {
          const imageUrl = await buscarImagen(country.name);
          images[country.name] = imageUrl;
        }
        setCountryImages(images);
      } catch (err) {
        console.log(err);
      }
    };

    obtenerPaises();
  }, []);      
     
  const handleSearch = async (term) => {
    setSearchTerm(term); 
  };

  const buscarImagen = async (countryName) => {
    const API_KEY = "SQKbkCM0E01KfJIz77kiXA0zOTet7C1NN5y7ql8-F-g";
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${countryName}&per_page=1`;

    const response = await fetch(URL);
    const data = await response.json();
    return data.results[0]?.urls?.regular;
  };

  return (
    <div className="main__content">    
      <SearchBar onSearch={handleSearch} />
      <div className="main__content--grid" >
        {lista.map((country, index) => (
          <div className="card" >
            <div className="image">
              <div className="image-onli">
                <img className="ima" src={countryImages[country.name]} alt={country.name} />
              </div>
            </div>
            <div className="info">
              <img className="flags-image" alt="" src={`https://flagsapi.com/${country.code}/flat/64.png`} />
              <div className="country-details">
                <p className="p1">{country.name}</p>
                <p className="p2">{country.continent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CountryList;