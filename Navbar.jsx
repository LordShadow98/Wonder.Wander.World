import React from "react";
import {Link, Outlet} from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="NavBar">
      <section className="Logo">
        <img src="URL" alt="Logo App" />
      </section>
      <nav>
        <ul>
          <li>
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
  <Outlet/>
    </div>
  );
};

export default NavBar;
