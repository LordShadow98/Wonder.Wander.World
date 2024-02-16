import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="SideBar debug">
      <section className="Logo">
        <img src="URL" alt="Logo App" />
      </section>
      <nav className="content-sideBar">
        <ul>
          <li className="list">
            <Link to="/">Home</Link>
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
