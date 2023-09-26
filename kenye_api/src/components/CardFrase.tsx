import { ReactElement } from 'react'
import { ICardQuote } from './ICardInterface'

interface ICardFraseProps{
    frases: ICardQuote
}

const CardFrase = (props:ICardFraseProps):ReactElement => {
    return(

            <div className="cardQuote">
                <h1>Frase de um incompreendido</h1>
                <p>:{props.frases.quote}</p>
            </div>
    )
}
export { CardFrase }