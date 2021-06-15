import React from 'react';

//local imports
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

//style imports
import classes from "./Layout.module.css";

export const Layout = ({ children, title }) => {
    return (
        <div className={classes.Layout}>
            <Header title={title} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
