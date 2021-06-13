import React from 'react';
import Head from 'next/head';

//local imports
import { Navbar } from "../Navbar/Navbar";

//style imports
import classes from "./Header.module.css";

export const Header = ({ title }) => {
    return (
        <header className={classes.Header}>
            <Head>
                <title>{title ? title : "Your Todo"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
        </header>
    )
}
