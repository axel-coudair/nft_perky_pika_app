import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import styles from '../styles/Header.module.scss'

export default function Header() {

    return (
        <>
            <div className={styles.block_header}>
                <img className={styles.block_header_img} src="/logo.png" />
            </div>
        </>
    );
}
