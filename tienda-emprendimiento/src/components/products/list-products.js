import React, { useEffect, useState } from "react";
import styles from '../../styles/list-products.module.css';
import sol from "../../img/sol.png"

export const ListProducts = () => {
    const [products, setProducts] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/productos/client')
        .then((response) => {
            return response.json();
        })
        .then(
            (response) => {
                setProducts(response);
            }
        );
    },[]);


    const onAddToCart = (id) => {
        const body = JSON.stringify({id});
        fetch('http://localhost:3001/agregar-producto/client/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });
    };

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
                                <img alt="imgUrlProduct" src={imgUrl}/>
                                <h3>{name}</h3>
                                <p>${price}</p>
                                <p>{stock}</p>
                                <button
                                   onClick={(e) => onAddToCart(_id)}
                                >Añadir al carrito</button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
};