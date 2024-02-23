// import "../alert/Alert";
// import "../countryList/CountryList";
// import Swal from "sweetalert2";

// const GET_ALL_COUNTRIES = gql`
//   query countries {
//     countries {
//       code
//       name
//       capital
//       currencies
//       continent {
//         name
//       }
//       languages {  
//         name
//       }
//     }
//   }
// `;
//   const mostrarInfo = (country) => {
//     const languageName =
//     country.languages.length > 0 ? country.languages[0].name : "N/A";
//     const message = `
//       País: ${country.name}
//       Capital: ${country.capital}
//       Continente: ${country.continent.name}
//       Idioma: ${languageName}
//       Moneda: ${country.currencies.join(", ")}
//     `;
    

//     const cardElement = `
//     <div class="card-container">  
//     <img className="ima" src={countryImages[country.name]} alt={country.name} />                    
//       <div class="card-body">
//           <img class="card-img-top" src="https://flagsapi.com/${country.code}/flat/64.png" alt="Flag">
//         <div class="card-info">
//           <h3>
//           <p class="card-div"> ${country.name}</p>       
//           <p class="card-text"> ${country.continent.name}</p> <h3>
//         </div>
//       </div>
//         <div class="card-text">
//         <p class="card-tx"><span class="capital-word">Capital:</span> ${country.capital}</p>
//         <p class="card-tx"><span class="idioma-word">Idioma:</span> ${languageName}</p>
//         <p class="card-tx"><span class="moneda-word">Moneda:</span> ${country.currencies.join(", ")}</p>
//      </div> 
//     </div>    
//   `;

//     Swal.fire({      
//       html: cardElement,
//       text: message,
//       position: "bottom-end",      
//       width: '27%',
//       heightAuto: '30%',
//       padding: '1rem',
//       showConfirmButton: false, 
//       showCloseButton: true,      
//     });
//     return(
//       <div
//          className="info" onClick={(e) => { e.stopPropagation(); mostrarInformacion(country) }}>
  
//       </div>
//     )
//   }

//   export default mostrarInfo;