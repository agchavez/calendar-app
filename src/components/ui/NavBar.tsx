
import { Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const style = {
  navLink: {
    color: 'black',
    textDecoration: 'none',
  },
  navClose: {
    color: 'red',
  }
}
export const NavBar = () => {
  return (
    <>
      <Navbar
        variant="dark"
        className="navbar"
        style={{ backgroundColor: "#0a1929" }}
      >
        <div className="container-fluid">
          <div></div>
          <NavDropdown
            className="nav_title"
            title="Jose Chavez"
            style={{
              color: "white",
            }}
          >
            <NavDropdown.Item>
              <Link to={'/home'} style = {style.navLink}>Mi cuenta</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to={'/home'} style = {style.navLink}>Configuraciones</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
            <Link to={'/home'} style = {style.navLink}>Mis alertas</Link>
              </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
            <Link to={'/home'} style = {style.navClose}>Cerrar sesion</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    </>
  );
};
