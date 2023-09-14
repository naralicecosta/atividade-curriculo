import { ReactElement } from "react"
import { IEpisodio } from "./IEpisodiosInterface";

//diz o que voce quer
interface ICardUserProps {
    episodio: IEpisodio
}

const CardUser = (props:ICardUserProps): ReactElement => {
    //podemos colocar js aqui, fora do html
    return (
        <div className="card"> 
          <span>Nome do episodio: {props.episodio.name}</span>
          <span>Data de lançamento: {props.episodio.air_date}</span>
        </div>
    )
}
export { CardUser } //recomendado assim
