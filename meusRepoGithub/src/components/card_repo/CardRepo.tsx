import { ReactElement } from "react";
import { IRepositorio } from "./IRepoInterface";
import { useEffect, useState } from 'react';



interface ICardRepoProps{
    repositorios: IRepositorio
}

function App() {
    const [repositorios, setRepositorios] = useState<IRepositorio[]>([])

    useEffect(() =>{
      fetch('https://api.github.com/users/naralicecosta/repos')
      .then(resultado => resultado.json())
      .then((dados) => setRepositorios(dados))
      .catch(erro => console.log(erro))
    },[])
}




const CardRepo = (props:ICardRepoProps):ReactElement =>{
    return(
        <div className="cardRepo"> 
          <span>Nome do repositório: {props.repositorios.name}</span>
          <span>Linguagem utilizada: {props.repositorios.language}</span>
        </div>
        )
}
export { CardRepo }
export default App;