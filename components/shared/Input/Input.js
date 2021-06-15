import React from 'react';

import classes from './Input.module.css';

export const InputWithRef = React.forwardRef(
    (props, ref) => <input className={classes.Input} ref={ref} {...props} />
)

export const Input = () => <input className={classes.Input} ref={ref} {...props} />;