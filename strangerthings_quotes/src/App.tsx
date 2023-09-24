import { useEffect, useState } from "react";
import { CardFrase } from "../components/CardFrase";
import { IFraseInterface } from "../components/IFraseInterface";
import './App.css'

function App(){
    const [frases, setFrases]= useState<IFraseInterface[]>()

    useEffect(() => {
    fetch('https://strangerthings-quotes.vercel.app/api/quotes')
    .then(resultado => resultado.json())
    .then((dados) => setFrases(dados.results))
    .catch(erro => console.log(erro))
    },[])

    return(
        <>
        <div className="cardQuotes">
            {frases.map((frase) =>  (
                <CardFrase
                key={frase.quote}
                frases={frase}
                />

            ))}
        </div>
        </>
    )
}
export default App;
