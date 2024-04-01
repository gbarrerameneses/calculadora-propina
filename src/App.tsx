import { menuItems } from "./data/db"
import  MenuItem  from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder() // recibe del custom hook useOrder

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto my-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black py-2">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item =>
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />)}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        // Agregamos la validación desde App y y no desde OrderContents.tsx
        // para prevenir que los componentes no se rendericen si no hay necesidad de hacerlo
          {order.length > 0 ? (
            <>
              <OrderContents
              order={order} // pasa el prop a OrderContents
              removeItem={removeItem}
              />

              <TipPercentageForm
              tip={tip}
              setTip={setTip} // pasamos la función que cambia tip
              />

              <OrderTotals
              order={order}
              tip={tip} // pasamos la propina
              placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacía</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
