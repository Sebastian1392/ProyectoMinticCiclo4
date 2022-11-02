import React from "react";
import styles from '../../styles/nav.module.css';
import { Outlet, Link } from "react-router-dom"; 

export const NavAdmin = () => {
    return(
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><Link className={styles.link} to="products">Lista productos</Link ></li>
                    <li><Link className={styles.link} to="edit-product">Modificar Productos</Link ></li>
                    <li><Link className={styles.link} to="sales">Lista Ventas</Link ></li>
                </ul>
                {/* <div className={styles.profileContainer}>
                    <select id="menuBar" className={styles.profile} name="select">
                        <option value="value1">Admin</option>
                        <option value="value2" selected>Cliente</option>
                    </select>
                </div> */}
            </nav>
            <Outlet />
        </>
    );
};

