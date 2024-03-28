import { formatCurrency } from "../helpers"
import { OrderItem, MenuItem } from "../types"

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentProps) { // Recibe el prop desde App y es tipado
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-10">
            {order.length === 0 ?
            <p className="text-center">La orden esta vacía</p>
            : (
                // iteramos lo que viene de order
                order.map(item => (
                    <div
                        key={item.id}
                        className="text-lg flex justify-between items-center border-t border-gray-700 py-3 last-of-type:border-b">
                        <div>
                            <p>{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                        </div>

                        <button
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => removeItem(item.id)}>
                            X
                        </button>
                    </div>
                    ))
            )
            }
            </div>
        </div>
        )
    }
