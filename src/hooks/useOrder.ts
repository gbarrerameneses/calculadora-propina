import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function userOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // Generic Type
    const [tip, setTip] = useState(0) // Creamos un nuevo estado para la propina

    // Función para agregar producto del menú al consumo
    const addItem = (item : MenuItem) => { // tipando la función desde types
        // utilizo find porque es un array y busco que no haya un producto duplicado
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
            // Identificando el elemento duplicado con map que nos da un nuevo arreglo
            const updatedOrder = order.map( orderItem => 
                orderItem.id === item.id // comparamos por medio de id's
                ? {...orderItem, quantity: orderItem.quantity + 1} // toma una copia de lo que hay en la orden y toma lo que tenemos en quantity e incrementa en 1
                : orderItem
                )
                setOrder(updatedOrder)

        } else {
            // const newItem : OrderItem = {...item, quantity: 1} // podríamos castear la variable con OrderItem, ya que estamos haciendo una copia del objeto
            const newItem = {...item, quantity: 1} // incrementa la cantidad del producto
            setOrder([...order, newItem]) // pasamos la copia de ese ojeto a la función setOrder
        }
    }

    // Función eliminar articulos orden
    const removeItem = (id: MenuItem['id']) => {
        // setOrder((prevOrder) => prevOrder.filter((order) => order.id !== id))
        setOrder(order.filter(item => item.id !== id)) //cualquiera de las dos sirve
    }

    // order y addItem se mandan a App.tsx
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem
    }
}