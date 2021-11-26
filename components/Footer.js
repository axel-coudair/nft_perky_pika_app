import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import styles from '../styles/Footer.module.scss'

export default function Footer() {

    return (
        <>
            <footer className={styles.block_footer}>
                <img className={styles.block_footer_img} src="/footer_icon.png" />
            </footer>
        </>
    );
}
