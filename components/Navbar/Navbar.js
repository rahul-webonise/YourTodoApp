import React from 'react';

//local imports
import { Logo } from "../Logo/Logo";
import { NavItems } from "./Nav-items/NavItems";

//styles import
import classes from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <Logo />
            <NavItems />
        </nav>
    )
}
