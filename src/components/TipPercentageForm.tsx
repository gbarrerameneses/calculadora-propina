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
    // setTip: React.Dispatch<React.SetStateAction<number>> // Ambas líneas son correctas
    setTip: Dispatch<SetStateAction<number>> // importamos { Dispatch } de react al igual que { SetStateAction }
  }

export default function TipPercentageForm( {setTip} : TipPercentageFormProps ) {
    return (
        <div>
            <h2 className="font-black text-2xl">Propina:</h2>

            <form>
                {tipOptions.map(tip => (
                    <div key={tip.id} className="flex gap-2">
                        <label htmlFor="tip.id">{tip.label}</label>
                        <input
                        id="tip.id"
                        type="radio"
                        name="tip"
                        value={tip.value}
                        onChange={ e => setTip( +e.target.value ) }
                        /* accedemos al valor del input,
                        // es una nueva forma con el signo de +
                        // ya que lo convierte a number porque
                        // es como lo estamos pasando*/
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
