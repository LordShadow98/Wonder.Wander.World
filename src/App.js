import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CountryForm from "./components/crudCountry/CountryCreationForm.jsx";
import CountryManagementForm from "./components/crudCountry/CountryManagementForm.jsx";
import SideBar from "./components/sideBar/SideBar.jsx";
import CountryList from "./components/countryList/CountryList.jsx";


export default function App() {
  return (
    <Router>
      <div className="app--container">
        <SideBar />
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/crear" element={<CountryForm />} />
          <Route path="/gestionar" element={<CountryManagementForm />} />
        </Routes>
      </div>
    </Router>
  );
}
