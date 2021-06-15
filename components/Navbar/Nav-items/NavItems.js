import React from 'react';
import Link from 'next/link';

//style import
import classes from './NavItems.module.css';

export const NavItems = () => {
    return (
        <ul className={classes.NavItems}>
            <li className={classes.LiTag}>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li className={classes.LiTag}>
                <Link href="/completed">
                    <a>Finished</a>
                </Link>
            </li>
        </ul>
    )
}
