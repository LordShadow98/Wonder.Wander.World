import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CountryForm from "./components/crudCountry/CountryCreationForm.jsx";
import CountryManagementForm from './components/crudCountry/CountryManagementForm.jsx';
import SideBar from "./components/sideBar/SideBar.jsx";
<<<<<<< HEAD
import SerchBar from "./components/serchBar/SerchBar.jsx";
import Countries from "./components/urls/Countries.jsx";
=======
>>>>>>> 81f30f4 ("Adding search bar with its respective styles and functionalities.")

export default function App() {
  return (
    <Router>
<<<<<<< HEAD
      <SerchBar/>    
        <div className="container-app">
          <SideBar />
          <div className="app--container--two">
            <div className="routes">
              <Routes>
                <Route path="/Home" element={<Countries />} />
                <Route path="/crear" element={<CountryForm />} />
                <Route path="/gestionar" element={<CountryManagementForm />} />
              </Routes>
            </div>
          </div>
        </div>
    
=======
      
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
>>>>>>> 81f30f4 ("Adding search bar with its respective styles and functionalities.")
    </Router>
  );
}