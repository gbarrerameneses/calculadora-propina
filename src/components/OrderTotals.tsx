import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
}

export default function OrderTotals( {order, tip} : OrderTotalsProps ) {
    // useMemo para evitar renders adicionales
    /* Función para calcular el subtotal
    // pasamos dos parametros, total y item (que es el elemento donde estamos iterando)
    // total es un acumulador por cada vez que itera almacena en memoria el acumulado
    // por lo que multiplicamos la cantidad por el precio e inicializamos en 0
    */
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    /* Se ejecuata cuando cambie tip u order
    // multiplicamos subtotalAmount por (la propina) tip
    */
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{ formatCurrency(subtotalAmount) }</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency (tipAmount)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">$0</span>
                </p>
            </div>

            <button></button>
        </>
    )
}
