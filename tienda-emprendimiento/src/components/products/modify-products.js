import React from "react";
import styles from "../../styles/modify-products.module.css"
import corazon from "../../img/corazon.png"

export const ModifyProduct = () => { 
    return (
        <>  
            <div className={styles.container}>
                <div className={styles.listmenu}>
                    <h3 className={styles.h3}>Productos</h3>
                    <a className={styles.a} href=" ">Sol de espuma</a>
                    <a className={styles.a} href=" ">Corazón de juguete</a>
                    <a className={styles.a} href=" ">Luna de jabón</a>
                    <a className={styles.a} href=" ">Castillo de arena</a>
                </div>
                <div className={styles.fig}>
                    <img className={styles.img} alt="sol" src={corazon}/>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>Nombre:</td>
                            <td>Corazón de juguete</td>
                        </tr>   
                        <tr>
                            <td>Descripción:</td>
                            <td>Corazón de juguete azul de 15x50 cm</td>
                        </tr>   
                        <tr>
                            <td>Precio:</td>
                            <td>$35.0</td>
                        </tr>   
                        <tr>
                            <td>Stock:</td>
                            <td>15</td>
                        </tr>   
                    </table>
                </div>
            </div>
        </>
    );
}