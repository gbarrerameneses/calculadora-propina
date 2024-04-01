import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageFormProps = {
    tip: number
    // setTip: React.Dispatch<React.SetStateAction<number>> // Ambas líneas son correctas
    setTip: Dispatch<SetStateAction<number>> // importamos { Dispatch } de react al igual que { SetStateAction }
  }

export default function TipPercentageForm( {setTip, tip} : TipPercentageFormProps ) {
    return (
        <div>
            <h2 className="font-black text-2xl">Propina:</h2>

            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor="tipOption.id">{tipOption.label}</label>
                        <input
                        id="tipOption.id"
                        type="radio"
                        name="tipOption"
                        value={tipOption.value}
                        onChange={ e => setTip( +e.target.value ) }
                        /* accedemos al valor del input,
                        // es una nueva forma con el signo de +
                        // ya que lo convierte a number porque
                        // es como lo estamos pasando*/
                        checked={tipOption.value === tip} // reinicia el radio button
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
