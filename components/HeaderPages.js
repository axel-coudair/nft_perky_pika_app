import React from "react";
import styles from '../styles/HeaderPages.module.scss'

export default function HeaderPages({ image }) {

    return (
        <div className={styles.block_header}>
            <img className={styles.block_header_img} src="/logo.png" />
            <img className={styles.block_header_title_img} src={image} />
        </div>
    );
}
