import React from "react";
import styles from '../../styles/list-products.module.css';
import sol from "../../img/sol.png"
import corazon from "../../img/corazon.png"

export const ListProducts = () => {
    return(
        <div className={styles.allList}>
            <div className={styles.product}>
                <img alt="sol" src={sol}/>
                <h3>Sol de espuma</h3>
                <p>$50.0</p>
                <p>Stock: 15</p>
                <button>Comprar</button>
            </div>
            <div className={styles.product}>
                <img alt="sol" src={corazon}/>
                <h3>Corazon de juguete</h3>
                <p>$35.0</p>
                <p>Stock: 3</p>
                <button>Comprar</button>
            </div>
            <div className={styles.product}>
                <img alt="sol" src={sol}/>
                <h3>Corazon de juguete</h3>
                <p>$35.0</p>
                <p>Stock: 3</p>
                <button>Comprar</button>
            </div>
            <div className={styles.product}>
                <img alt="sol" src={corazon}/>
                <h3>Corazon de juguete</h3>
                <p>$35.0</p>
                <p>Stock: 3</p>
                <button>Comprar</button>
            </div>
            <div className={styles.product}>
                <img alt="sol" src={sol}/>
                <h3>Corazon de juguete</h3>
                <p>$35.0</p>
                <p>Stock: 3</p>
                <button>Comprar</button>
            </div>
        </div>
    );
};