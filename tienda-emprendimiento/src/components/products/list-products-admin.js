import React, {useState, useEffect} from "react";
import styles from '../../styles/list-products-admin.module.css';
import sol from "../../img/sol.png"

export const ListProductsAdmin = () => {
    const [products, setProducts] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3002/productos/admin')
        .then((response) => {
            return response.json();
        })
        .then(
            (response) => {
                setProducts(response);
            }
        );
    },[]);

    if(!products) {
        console.log(products);
        return(
            <div className={styles.allList}>
                Cargando...
            </div>
        );
    } else {
        return(
            <div className={styles.allList}>
                {
                    products.map( ({_id,name,price,stock, imgUrl}) => {
                        return (
                            <div key={_id} className={styles.product}>
                                <img alt="sol" src={imgUrl}/>
                                <h3>{name}</h3>
                                <p>${price}</p>
                                <p>{stock}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

};