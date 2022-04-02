import { Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelectorApp } from "../../hooks/redux";
import { useDispatch } from "react-redux";
import { startLogout } from "../../state/action-creators/authActionCreators";

const style = {
  navLink: {
    color: "black",
    textDecoration: "none",
  },
  navClose: {
    color: "red",
  },
};
export const NavBar = () => {
  const { firstName, lastName } = useSelectorApp((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
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
            title={firstName + " " + lastName}
            style={{
              color: "white",
            }}
          >
            <NavDropdown.Item>
              <Link to={"/home"} style={style.navLink}>
                Mi cuenta
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to={"/home"} style={style.navLink}>
                Configuraciones
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to={"/home"} style={style.navLink}>
                Mis alertas
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item style={style.navClose} onClick={handleLogout}>
              Cerrar sesion
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    </>
  );
};
