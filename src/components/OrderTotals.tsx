import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals( { order, tip, placeOrder } : OrderTotalsProps ) {
    // useMemo para evitar renders adicionales
    /* Función para calcular el subtotal
    // pasamos dos parametros, total y item (que es el elemento donde estamos iterando)
    // total es un acumulador por cada vez que itera almacena en memoria el acumulado
    // por lo que multiplicamos la cantidad por el precio e inicializamos en 0
    */
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    /* Se ejecuata cuando cambien las dependencias de tip u order
    // multiplicamos subtotalAmount por (la propina) tip
    */
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    /* Se ejecuata cuando cambien las dependencias de tip u order
    // sumamos subtotalAmount más tipAmount
    */
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

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
                    <span className="font-bold">{formatCurrency (totalAmount)}</span>
                </p>
            </div>

            <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-25"
            disabled={totalAmount === 0}
            onClick={placeOrder}>Guardar orden</button>
        </>
    )
}
