import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {

  return (
    <div className="SideBar debug">
      <div className="Logo">
        {/* <img src="URL" alt="Logo App" /> */}
      </div>
      <nav>
        <ul>
<<<<<<< HEAD
          <li>
            <Link to="/home">Home</Link>
=======
          <li className="list">
            <Link to="/Home">Home</Link>
>>>>>>> 81f30f4 ("Adding search bar with its respective styles and functionalities.")
          </li>
          <li className="list">
            <Link to="/crear">Crear pais</Link>
          </li>
          <li className="list">
            <Link to="/gestionar">Gestionar pais</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
