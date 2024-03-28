import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function userOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // Generic Type

    const addItem = (item : MenuItem) => { // tipando la función desde types
        console.log('Agregando...', item);
    }

    return {
        addItem
    }
}