import React from "react";
import styles from '../styles/list-products.module.css';

export const ListProducts = () => {
    return(
        <div className={styles.allList}>
            <div className={styles.product}>
                <img></img>
                <h3>Sol de espuma</h3>
                <p>$50.0</p>
                <p>Stock: 15</p>
            </div>
            <div className={styles.product}>
                <img></img>
                <h3>Corazon de juguete</h3>
                <p>$35.0</p>
                <p>Stock: 3</p>
            </div>
            <div className={styles.product}>
                <img></img>
                <h3>Corazon de juguete</h3>
                <p>$35.0</p>
                <p>Stock: 3</p>
            </div>
            <div className={styles.product}>
                <img></img>
                <h3>Corazon de juguete</h3>
                <p>$35.0</p>
                <p>Stock: 3</p>
            </div>
            <div className={styles.product}>
                <img></img>
                <h3>Corazon de juguete</h3>
                <p>$35.0</p>
                <p>Stock: 3</p>
            </div>
        </div>
    );
};