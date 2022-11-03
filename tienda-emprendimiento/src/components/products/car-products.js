import React from "react";
import styles from '../../styles/car-products.module.css';
import sol from "../../img/sol.png"
import corazon from "../../img/corazon.png"

export const CarProducts = () => { 
    return (
        <>
            <table>
                <tr>
                    <th>Imagen</th>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Valor</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td><img alt="sol" src={sol} /></td>
                    <td>2</td>
                    <td>Sol de espuma</td>
                    <td>$ 50</td>
                    <td>$ 100</td>
                </tr>
                <tr>
                    <td><img alt="sol" src={corazon}/></td>
                    <td>1</td>
                    <td>Corazón juguete</td>
                    <td>$ 50</td>
                    <td>$ 50</td>
                </tr>
                <tr>
                    <td className={styles.total}></td>
                    <td className={styles.total}></td>
                    <td className={styles.total}></td>
                    <td className={styles.total}><b>Total</b></td>
                    <td className={styles.total}><b>$ 150</b></td>
                </tr>
            </table>
            <div className={styles.buttonsDiv}>
                <button>Finalizar Compra</button>
                <button>Cancelar</button>
            </div>
        </>
    );
}