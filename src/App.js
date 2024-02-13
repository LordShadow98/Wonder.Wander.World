import React from "react";
import './App.css';
import CountryForm from "./components/crudCountry/CountryCreationForm.jsx";
import CountryManagementForm from './components/crudCountry/CountryManagementForm.jsx';
import Countries from './components/apis/Countries.jsx';




export default function App() {
  return (
    <div className="app--container">
      <div className="app--container--two">
        
        {/* <CountryForm /> */}
        <CountryManagementForm/>
      </div>
    </div>
  );
}
