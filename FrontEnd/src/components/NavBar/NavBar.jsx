import React from "react";
import { NavLink } from "react-router-dom";
import NavBarStyles from "./NavBar.module.css";


const NavBar = () => {

    return (

        <div className={NavBarStyles.navContainer}>
            <nav>
                <ul>
                    <NavLink to='/'>Inicio</NavLink>
                    <NavLink to='/About'>Sobre Mi</NavLink>
                    <NavLink to='/Shifts'>Turnos</NavLink>
                    <NavLink to='/Contact'>Contacto</NavLink>
                    {/* <NavLink to='/Products'>Productos</NavLink> */}
                    {/*<NavLink to='/Course'>Cursos</NavLink> */}
                    <NavLink to='/Login'>Login</NavLink>
                </ul>
            </nav>
        </div>
    )

}

export default NavBar;
