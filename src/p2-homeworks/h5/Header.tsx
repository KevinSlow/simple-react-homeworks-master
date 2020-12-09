import React from "react";
import {NavLink} from "react-router-dom";
import s from "./pages/Nav.module.css"

function Header() {
    return (
        <div>
            <nav className={s.nav}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/pre-junior"}>PRE_JUNIOR</NavLink>
                <NavLink to={"/Junior"}>Junior</NavLink>
                <NavLink to={"/JuniorPlus"}>JuniorPlus</NavLink>
            </nav>



        </div>



    );
}

export default Header;
