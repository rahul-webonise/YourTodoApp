import classes from "./Button.module.css";

export const Button = ({ children, style, onClick, title }) => {

    if (onClick) return <button title={title} style={style} onClick={onClick} className={classes.Button}>{children}</button>

    return <button style={style} className={classes.Button}>{children}</button>
}
