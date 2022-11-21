import React, { useEffect, useState } from "react";
import styles from "../../styles/car-products.module.css";

export const CarProducts = () => {
	const [cart, setCart] = useState(false);

    const getProduct = async (id, quantity) => {
        const response = await fetch(`http://localhost:3001/productos/client/${id}`);
        const { name, price , imgUrl} = await response.json();
		console.warn("hola");
        return {
            id,
            imgUrl,
            name,
            price,
            quantity,
            total: price * quantity,
        };
    };

    const getCart = async () => {
        const response = await fetch("http://localhost:3001/carrito/client");
        const cartResponse = await response.json();
        const cart = await Promise.all(cartResponse.map(async ({idProduct, quantity}) => {
            return await getProduct(idProduct, quantity);
        }));
        setCart(cart);
    };

    const onPurchase = async() => {
        const response = await fetch("http://localhost:3001/agregar-venta/client/", {
            method: 'PUT'
        });
        const cart = await response.json();
        setCart(cart);
    };


	useEffect(() => {
		getCart()
	}, []);

	if (!cart) {
		return <>Cargando...</>;
	} else {
		return (
			<>
				<table>
					<thead>
						<tr>
							<th>Imagen</th>
							<th>Cantidad</th>
							<th>Nombre del producto</th>
							<th>Valor</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{cart.map(
							({ id, imgUrl, quantity, name, price, total }) => {
								return (
									<tr key={id}>
										<td>
											<img src={imgUrl} />
										</td>
										<td>{quantity}</td>
										<td>{name}</td>
										<td>$ {price}</td>
										<td>$ {total}</td>
									</tr>
								);
							}
						)}
					</tbody>
					<tfoot>
						<tr>
							<td className={styles.total}></td>
							<td className={styles.total}></td>
							<td className={styles.total}></td>
							<td className={styles.total}>
								<b>Total</b>
							</td>
							<td className={styles.total}>
								<b>$ {
                                    Math.round(cart.reduce((previous, {total}) => previous + total, 0))
                                }</b>
							</td>
						</tr>
					</tfoot>
				</table>
				<div className={styles.buttonsDiv}>
					<button
                    onClick={() => onPurchase()}
                    >Finalizar Compra</button>
					<button>Cancelar</button>
				</div>
			</>
		);
	}
};
