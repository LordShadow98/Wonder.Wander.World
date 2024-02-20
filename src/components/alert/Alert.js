import Swal from 'sweetalert2';


function Alert({ mostrarInformacion, country }) {
  const e = () => {
    mostrarInformacion(country);
  };
  const languageName = country.languages.length > 0 ? country.languages[0].name : "N/A";
  const message = `
    País: ${country.name}\n
    Bandera: https://flagsapi.com/${country.code}/flat/64.png\n
    Continente: ${country.continent.name}\n
    Idioma: ${languageName}\n
    Moneda: ${country.currencies.join(",")}
  `;
  
  Swal.fire({
    title: `${country.name}\n`,
    text:  `${country.continent.name}\n`,
    info: `${languageName}\n`,
    condition: `${country.currencies.join(",")}\n`,
    imageUrl: `https://flagsapi.com/${country.code}/flat/64.png\n`,
    showConfirmButton: false,
    message
  });
  


  return (
    <div className="info" onClick={(e) => { e.stopPropagation(); mostrarInformacion(country) }}>
    </div>
  );
}


export default Alert;

// import Swal from 'sweetalert2';

// function Alert({ mostrarInformacion, country }) {

//   const handleClick = () => {
//     const languageName = country.languages.length > 0 ? country.languages[0].name : "N/A";
//     const message = `
//       País: ${country.name}\n
//       Bandera: https://flagsapi.com/${country.code}/flat/64.png\n
//       Continente: ${country.continent.name}\n
//       Idioma: ${languageName}\n
//       Moneda: ${country.currencies.join(",")}
//     `;
    
//     Swal.fire({
//       title: `${country.name}\n`,
//       text:  `${country.continent.name}\n`,
//       info: `${languageName}\n`,
//       condition: `${country.currencies.join(",")}\n`,
//       imageUrl: `https://flagsapi.com/${country.code}/flat/64.png\n`,
//       showConfirmButton: false,
//       message
//     });
//   };

//   return (
//     // <div className="inf" onClick={(e) => { e.stopPropagation(); mostrarInformacion() }}>
//     // </div>
//      <div className="info" onClick={() => mostrarInformacion(country)}></div>
//   );
// }

// export default Alert;
