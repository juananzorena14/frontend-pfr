import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-css">
      <div className="container-fluid div-a">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link fw-bold" : "nav-link"
          }
          to="/"
        >
          El Rincon del Sabor
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold" : "nav-link"
                }
                aria-current="page"
                to="/pay"
              >
                Pedidos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold" : "nav-link"
                }
                to="/login"
              >
                Iniciar Sesión
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold" : "nav-link"
                } to='/register'
              >
                Registrarse
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
