import { useEffect, useState } from "react";
import "./App.css";
import { CardRepo, IRepositorio } from "./components/card_repo";

function App() {
  const [repositorios, setRepositorios] = useState<IRepositorio[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/naralicecosta/repos")
      .then((resultado) => resultado.json())
      .then((dados) => setRepositorios(dados))
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <>
      <div className="cards">
        {repositorios.map((repositorio) => (
          <CardRepo 
          key={repositorio.name} 
          repositorios={repositorio} />
        ))}
      </div>
    </>
  )
}
export default App;