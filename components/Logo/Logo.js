import React from 'react';
import Image from 'next/image';

//style import
import classes from './Logo.module.css';

export const Logo = () => {
    return (
        <span className={classes.LogoContainer}>
            <Image
                className={classes.Logo}
                src="/images/logo/YourTodoLogo.png"
                alt="Picture of the author"
                width={50}
                height={50}
            />
        </span>
    )
}
