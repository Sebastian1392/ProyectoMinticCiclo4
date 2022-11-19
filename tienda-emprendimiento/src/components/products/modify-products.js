import React, {useState, useEffect} from "react";
import styles from "../../styles/modify-products.module.css"
import corazon from "../../img/corazon.png"

export const ModifyProduct = () => { 
    const [products, setProducts] = useState(false);
    const [product, setProduct] = useState(false); 
    const [idP, setIdP] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3002/productos/admin")
        .then((res) => {return res.json()})
        .then((res) => {setProducts(res)})
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3002/producto/admin/${idP}`)
        .then((res) => {return res.json()})
        .then((res) => {setProduct(res)});
    }, [idP])

    const setIdProduct = (id) => {
        setIdP(id)
    }

    if(!products){
        return(
            <div>
                <h3>Cargando...</h3>
            </div>
        );
    }else{
        return(
            <div className={styles.container}>
                <div className={styles.listmenu}>
                    <h3 className={styles.h3}>Productos</h3>
                    {
                        products.map((products) => {
                                return(
                                    <button id="{products._id}" onClick={(e) => setIdProduct(products._id)}>{products.name}</button>                                    
                                )
                        })
            
                    }
                </div>

                <div className={styles.fig}>
                    {(() => {
                        if(product){
                            <img className={styles.img} alt="sol" src={corazon}/>
                        }
                    })()}
                    
                </div>
                <div>
                    {(() => {
                        if(product){
                            return(
                                <>
                                    <table>
                                        <tr>
                                            <td>Nombre:</td>
                                            <td>
                                                <input defaultValue={product.name} placeholder={product.name}></input>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <td>Descripción:</td>
                                            <td>
                                                <textarea defaultValue={product.description} placeholder={product.description}></textarea>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <td>Precio:</td>
                                            <td>
                                                <input defaultValue={product.price} placeholder={product.price}></input>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <td>Stock:</td>
                                            <td>
                                                <input defaultValue={product.stock} placeholder={product.stock}></input>
                                            </td>
                                        </tr>   
                                    </table>
                                    <div className={styles.buttonContainer}>
                                        <button className={styles.buttonSave}>Guardar</button>
                                    </div>                                   
                                </>   
                            )
                        }
                    })()}
                </div>
            </div>
        );
    }
}