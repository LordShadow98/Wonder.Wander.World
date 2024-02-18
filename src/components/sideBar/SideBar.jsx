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
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/crear">Crear pais</Link>
          </li>
          <li>
            <Link to="/gestionar">Gestionar pais</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
