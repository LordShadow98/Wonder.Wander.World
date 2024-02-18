import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CountryForm from "./components/crudCountry/CountryCreationForm.jsx";
import CountryManagementForm from './components/crudCountry/CountryManagementForm.jsx';
import Countries from './components/apis/Countries.jsx';
import SideBar from "./components/sideBar/SideBar.jsx";

export default function App() {
  return (
    <Router>
      
      {/* <SerchBarPrueba/> */}
      {/* <div className="app--container"> */}
      <main className="container-app">
        <SideBar />
        
        {/* <div className="app--container--two"> */}
        <div className="routes">
          <Routes>
            <Route path="/Home" element={<Countries />} />
            <Route path="/crear" element={<CountryForm />} />
            <Route path="/gestionar" element={<CountryManagementForm />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}
