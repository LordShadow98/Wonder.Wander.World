
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery,gql } from "@apollo/client";
import SearchBar from "../serchBar/SearchBar";

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
  const { data } = useQuery( viewCountry);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
 const [lista,setLista] = useState([])
 
  
  useEffect(() => {
    const obtenerPaises = async () => {
      try {
        const res = await axios.get("http://localhost:3002/country");
       
        setLista(res.data.country);
        setSearchResults(res.data.country);
      } catch (err) {
        console.log(err);
      }
    };

    obtenerPaises();
  }, []);      
     
  const handleSearch = async (term) => {
    setSearchTerm(term); 
  };

  return (
    <div className="main__content">    
      <SearchBar onSearch={handleSearch} />
      <div className="main__content--grid" >
        {lista.map((country, index) => (
          <div className="card" key={index}>
            <div className="image">
              <div className="image-onli">
                 {/* <img className="ima" src={countryImages[country.name]} alt={country.name} />  */}
              </div>
            </div>
            <div className="info">
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
};

export default CountryList;

































