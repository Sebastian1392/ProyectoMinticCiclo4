import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import styles from "../../styles/modify-products.module.css"
import corazon from "../../img/corazon.png"

export const ModifyProduct = () => { 
    const [products, setProducts] = useState(false);
    const [create, setCreate] = useState(false);

    const [name, setName] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [imgUrl, setImgUrl] = useState('');

    const [price, setPrice] = useState(0); 
    const [stock, setStock] = useState(0); 
    const [idP, setIdP] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3002/productos/admin")
        .then((res) => {return res.json()})
        .then((res) => {setProducts(res)})

    }, []);

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:3002/producto/admin/${idP}`, {
            method:'PUT',
            body: JSON.stringify({name, description, price, stock, imgUrl}),
            headers: {
                'Content-Type':'Application/json'
            }
        });
        if(result){
            alert(`El producto "${name}" fue modificado exitosamente!`);
            window.location.reload(false);
        }else{
            console.warn(`El producto "${name}" no fue modificado...`);
        }
    }

    const createProduct = async () => {
        console.warn(JSON.stringify({name, description, price, stock, imgUrl}));
        let result = await fetch(`http://localhost:3002/producto/admin`, {
            method:'POST',
            body: JSON.stringify({name, description, price, stock, imgUrl}),
            headers: {
                'Content-Type':'Application/json'
            }
        });
        if(result){
            alert(`El producto "${name}" fue creado exitosamente!`);
            window.location.reload(false);
        }else{
            console.warn(`El producto "${name}" no fue creado...`);
        }
    }

    const setIdProduct = (id) => {
        setIdP(id)
        setCreate(false);
    }

    const setNewProduct = (id) => {
        setIdP(id)
        setName('')
        setDescription('');
        setPrice('');
        setStock('');
        setImgUrl('');
        setCreate(true);
    }

    useEffect(() => {
        getProductDetails();
    }, [idP]);

    const getProductDetails = async () => {
        await fetch(`http://localhost:3002/producto/admin/${idP}`)
            .then((res) => {return res.json()})
            .then((res) => {
                setName(res.name);
                setDescription(res.description);
                setStock(res.stock);
                setPrice(res.price);
                setImgUrl(res.imgUrl);
            });
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
                    <div className={styles.newProductContainer}>
                        <button onClick={(e) => {setNewProduct(1)}}>Nuevo producto</button>
                    </div>
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
                        if(idP){
                            return (
                                <>
                                    <img className={styles.img} alt="Ingrese un Link para cargar la imagen" src={imgUrl}/>
                                </>     
                            )
                        }
                    })()}
                    
                </div>

                <div>
                    {(() => {
                        if(idP){
                            return(
                                <>
                                        <table>                                        
                                            <tr>                 
                                                <td>Nombre:</td>
                                                <td>
                                                    <input onChange={(e) => {setName(e.target.value)}} value={name}></input>
                                                </td>
                                            </tr>   
                                            <tr>
                                                <td>Descripción:</td>
                                                <td>
                                                    <textarea onChange={(e) => {setDescription(e.target.value)}} value={description}></textarea>
                                                </td>
                                            </tr>   
                                            <tr>
                                                <td>Precio:</td>
                                                <td>
                                                    <input onChange={(e) => {setPrice(e.target.value)}} value={price}></input>
                                                </td>
                                            </tr>   
                                            <tr>
                                                <td>Stock:</td>
                                                <td>
                                                    <input onChange={(e) => {setStock(e.target.value)}} value={stock}></input>
                                                </td>
                                            </tr>   
                                            <tr>
                                                <td>Link de imagen:</td>
                                                <td>
                                                    <input onChange={(e) => {setImgUrl(e.target.value)}} value={imgUrl}></input>
                                                </td>
                                            </tr>   
                                        </table>
                                        {(() => {
                                            if(create){
                                                return(
                                                    <div className={styles.buttonContainer}>
                                                        <button onClick={createProduct} className={styles.buttonSave}>Crear</button>
                                                    </div>   
                                                ) 
                                            }else{
                                                return(
                                                    <div className={styles.buttonContainer}>
                                                        <button onClick={updateProduct} className={styles.buttonSave}>Guardar</button>
                                                    </div>  
                                                )                                                  
                                            }
                                        })()}                                                                    
                                </>   
                            )
                        }
                    })()}
                </div>

            </div>
        );
    }
}