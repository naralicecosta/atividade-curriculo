import { ReactElement } from "react";
import { IRepositorio } from "./IRepoInterface";

interface ICardRepoProps{
    repositorios: IRepositorio
}

const CardRepo = (props:ICardRepoProps):ReactElement =>{
    return(/*melhorar o css, adicionar uma div em volta */
        <div className="cardRepo"> 
          <span><h1>Nome do repositório:</h1><p>{props.repositorios.name}</p></span>
          <span><h1>Tecnologia utilizada:</h1><p>{props.repositorios.language}</p></span>
          <span><h1>Link perfil:</h1><p>{props.repositorios.html_url}</p></span>
        </div>
        )

}
export { CardRepo }
