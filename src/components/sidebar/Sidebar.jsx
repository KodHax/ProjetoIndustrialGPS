/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

const SideLeftbar = () => {

  return (
    <>
     <div className="area"></div><nav className="main-menu">
            <ul>
                <li className="has-subnav">
                    <Link to={"/dashboard/users"}>
                        <i className="fa fa-globe fa-2x"></i>
                        <span className="nav-text">
                            Users
                        </span>
                    </Link>
                </li>
                <li className="has-subnav">
                    <Link to={"/dashboard/hoteis"}>
                       <i className="fa fa-comments fa-2x"></i>
                        <span className="nav-text">
                            Hotéis
                        </span>
                    </Link>
                    
                </li>
                <li className="has-subnav">
                    <Link to={"/dashboard/quartos"}>
                       <i className="fa fa-camera-retro fa-2x"></i>
                        <span className="nav-text">
                            Quartos
                        </span>
                    </Link>
                </li>
            </ul>

            <ul className="logout">
                <li>
                    <Link to={"/"}>
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Voltar
                        </span>
                    </Link>
                </li>  
            </ul>
        </nav>
    </>
  );
};
export default SideLeftbar