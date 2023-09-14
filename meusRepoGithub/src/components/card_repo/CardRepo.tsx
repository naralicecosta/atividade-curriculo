import { ReactElement } from "react";
import { IRepositorio } from "./IRepoInterface";

interface ICardRepoProps{
    repositorios: IRepositorio
}

const CardRepo = (props:ICardRepoProps):ReactElement =>{
    return(/*melhorar o css, adicionar uma div em volta */
        <div className="cardRepo"> 
          <span>Nome do repositório: {props.repositorios.name}</span>
          <span>Descrição: {props.repositorios.description}</span>
          <span>Linguagem utilizada: {props.repositorios.language}</span>
          <span>Link perfil: {props.repositorios.html_url}</span>
        </div>
        )
}
export { CardRepo }
