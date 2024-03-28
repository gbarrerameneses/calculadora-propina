import { useState } from "react";
import type { OrderItem } from "../types";

export default function userOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // Generic Type

    const addItem = () => {
        console.log('Agregando...');
    }

    return {
        addItem
    }
}