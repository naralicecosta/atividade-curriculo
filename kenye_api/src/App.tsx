import { useEffect, useState } from 'react';
import { ICardQuote } from './components/CardFrase'
import './App.css'
function App() {
  const [frases, setFrases] = useState<ICardQuote[]>()
  
  useEffect(() => {
    fetch("https://api.kanye.rest")
    .then((reultado) => resultado.json())
    .then((dados) => setFrases(dados))
    .catch((erro) => console.log(erro))
  },[])
  return (
    <>
    <div className='cards'>
      {frases.map((frase) => (
        <cardQuote
        key={frase.quote}
        frases={frase} />
       ))}
    </div>
    </>

  )
}

export default App;
