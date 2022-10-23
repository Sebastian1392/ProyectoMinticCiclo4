import React from "react";
import styles from '../styles/nav.module.css';

export const Nav = () => {
    return(
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><a>Lista productos</a></li>
                    <li><a>Modificar productos</a></li>
                    <li><a>Lista ventas</a></li>
                </ul>
            </nav>
        </>
    );
};