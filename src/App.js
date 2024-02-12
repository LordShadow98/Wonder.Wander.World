import React from "react";
import "./components/apCountryManagementForm/CountryManagementFormis/Style.css"
import Countries from './components/apis/Countries.jsx';
import CountryManagementForm from "./components/crudCountry/CountryManagementForm.js";



function App() {
  return (
    <div className="container">     
        <Countries/>   
  
          
    </div>
  );
}

export default App;

