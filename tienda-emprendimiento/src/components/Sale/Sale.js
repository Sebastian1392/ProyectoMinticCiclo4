import React, {useState, useEffect} from "react";
import Styles from "../../styles/Sale.css"

export const Sale=()=> {
    const [sales, setSales] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3002/ventas')
            .then((res) => {return res.json()})
            .then((res) => {setSales(res)});
    }, []);

    if(!sales){
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }else{
        return (
            <section>
                <table>
                    <tr>
                        <th>Fecha de Venta</th>
                        <th>Id</th>
                        <th>Precio Total</th>
                        
                    </tr>
                    {
                        sales.map(({_id, products, totalProducts, totalPrice, saleDate}) => {
                            return (
                                <tr>
                                    <th>{saleDate}</th>
                                    <th>{_id}</th>
                                    <th>{totalPrice}</th>
                                   
                                </tr>
                            )
                        })
                    }              
                </table>
            </section>


        )
    }

    /*
    const [total, setTotal] = React.useState(0);
    React.useEffect( () => {
        let counter = 0;
        ventas.map( item => {
            return counter += item.valor;
        })

        setTotal( counter )
    }, [])
    return (
        <>

            <section id="table">
                <table>
                    <tr>
                        <th>Fecha</th>
                        <th>ID Venta</th>
                        <th>Valor</th>
                    </tr>
                    {
                        ventas.map(venta => (
                            <tr>
                                <td>{venta.fecha}</td>
                                <td>{venta.id}</td>
                                <td>${venta.valor}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td></td>
                        <td><b>TOTAL</b></td>
                        <td><b>${total}</b></td></tr>
                </table>
            </section>
        </>
    );
    */
}

