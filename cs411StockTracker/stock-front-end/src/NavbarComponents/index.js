import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
        <Nav>
        <NavMenu>
        <NavLink to="/Stock" activeStyle>
            Stock
          </NavLink>
        <NavLink to="/index" activeStyle>
            Home
        </NavLink>
        <NavLink to="/login" activeStyle>
            Log In
        </NavLink>
        <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;