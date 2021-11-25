
import React from 'react'
import useStyles from './CustomButtonStyle'


export default function CustomButton({ children, variant = "contained", ...props }) {
    const classes = useStyles();
    return (
        // <Button className={classes.customButton} variant={variant} {...props} >
        { children }
    )
}
