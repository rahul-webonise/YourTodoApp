import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//style import
import classes from './Logo.module.css';

export const Logo = () => {
    return (
        <span className={classes.LogoContainer}>
            <Link href="/">
                <a>
                    <Image
                        className={classes.Logo}
                        src="/images/logo/YourTodoLogo.png"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                    />
                </a>
            </Link>
        </span>
    )
}
