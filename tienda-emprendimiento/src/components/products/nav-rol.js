import React from "react";
import styles from '../../styles/nav-rol.module.css';
import { Outlet, Link } from "react-router-dom"; 

export const NavRol = () => {
    return(
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><Link className={styles.link} to="admin-rol">Perfil Admin</Link ></li>
                    <li><Link className={styles.link} to="client-rol">Perfil Cliente</Link ></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};
