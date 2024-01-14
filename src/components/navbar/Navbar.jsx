import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">LowPrice</span>
        </Link>
        
        <div className="navItems">
        <button className="navButton" style={{borderRadius:"20px"}}>
          <NavLink
            to="/dashboard"
            style={{ textDecoration: "none", color: "inherit"}}
            >
            Dashboard
          </NavLink>
        </button> 
        </div>
        <div className="navItems">
          <button className="navButton" style={{borderRadius:"20px"}}>
            <NavLink
              to="/register"
              style={{ textDecoration: "none", color: "inherit"}}
              >
              Registar
            </NavLink>
          </button>
          <button className="navButton" style={{borderRadius:"20px"}}>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "inherit"}}
              >
              Login
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
