import React from 'react';
import Link from "next/link";

import classes from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={classes.Footer}>
            <Link href="/todo-example">
                <a className={classes.EgLink}>Todo List Eg</a>
            </Link>
            <span>-Rahul BV</span>
        </div>
    )
}
