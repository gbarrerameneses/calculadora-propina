import { useState } from "react";
import type { OrderItem } from "../types";

export default function userOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // Generic Type
    const [total, setTotal] = useState(0)

    return {

    }
}