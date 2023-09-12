import { ReactElement } from "react"

//diz o que voce quer
interface ICardUserProps{
    nome: string;
    rua: string;
    bairro: string;
}

const CardUser = (props:ICardUserProps): ReactElement => {
    //podemos colocar js aqui, fora do html
    return(
        <div className="card"> 
          <span>Nome: {props.nome}</span>
          <span>Endereço: {props.rua}</span>
          <span>Bairro: {props.bairro}</span>
        </div>
    
        );
}
export{ CardUser } //recomendado assim
