import React from "react";
import { Sale } from "..";
import "./Sale.css";

const ventas = [
    {
        id: 2310,
        fecha: "2022/11/01",
        valor: "$" + 10.000
    },
    {
        id: 4222,
        fecha: "2022/11/02",
        valor: "$" + 15.000
    },
    {
        id: 3543,
        fecha: "2022/11/03",
        valor: "$" + 23.000
    },
    {
        id: 4532,
        fecha: "2022/11/04",
        valor: "$" + 41.000
    },
    {
        id: 5739,
        fecha: "2022/10/05",
        valor: "$" + 13.000
    },
]

export const Sale=()=> {
    const [total, setTotal] = React.useState(0);
    React.useEffect( () => {
        let counter = 0;
        ventas.map( item => {
            counter += item.valor;
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
                                <td>{venta.valor}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td></td>
                        <td><b>TOTAL</b></td>
                        <td><b>{total}</b></td></tr>
                </table>
            </section>
        </>
    );
}

