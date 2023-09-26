import { ReactElement } from "react"
import { IFraseInterface } from "./IFraseInterface"

interface ICardFraseProps{
    frases: IFraseInterface
}

const CardFrase = (props: ICardFraseProps): ReactElement =>{
    return(
        <div className="cardFrase">
            <span><h1>Frase stranger things: {props.frases.quote}</h1></span>
            <span>Autor da frase: {props.frases.author}</span>
        </div>
    )
}


export { CardFrase }