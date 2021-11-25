
import React from 'react'
import styles from '../styles/CustomButton.module.scss'

export default function CustomButton({ children, classx = "", ...props }) {
    return (
        <button {...props} className={` btn btn-primary ${styles.customButton}`} type="submit" >
            {children}
        </button >
    )
}
