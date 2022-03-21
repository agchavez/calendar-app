import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar
        variant="dark"
        className="navbar"
        style={{ backgroundColor: "#0a1929" }}
      >
        <div className="container-fluid">
          <div>
            <NavDropdown className="nav_title" title="Jose Chavez">
              <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Configuraciones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Mis alertas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cerrar sesion
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <button className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt"></i>
            <span> Salir</span>
          </button>
        </div>
      </Navbar>
    </>
  );
};
