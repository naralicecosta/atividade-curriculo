import { useEffect, useState } from 'react';
import { CardUser } from './components'
import './App.css';

function App() {
  
  const [episodios, setEpisodios] = useState<IEpisodio[]>([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/apisode')
    .then(resultado => resultado.json())
    .then((dados) => setEpisodios(dados.results))
    .catch(erro => console.log(erro))
    
  },[])
  

  return (
    <>
      <div className="cardWrap">
        {episodios.map((episodio) => (
          <CardUser
            key={episodio.id}
            episodio={episodio}
          />
        ))}
      </div>
    </>
  )
}
export default App;
