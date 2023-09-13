import './App.css';
import CardProfile from './components/card_repo';
import { profile } from 'console';

/*function App() {
        const [repositorios, setRepositorios] = useState<IRepositorio[]>([])
        const [profile, setProfile] = useState<IProfile[]>([])

        useEffect(() =>{
          fetch('https://api.github.com/users/naralicecosta/repos')
          .then(resultado => resultado.json())
          .then((dados) => setRepositorios(dados))
          .catch(erro => console.log(erro))
        },[])*/

      return (
        <>
          <div className="cards">
              {repositorios.map((repositorio) => (
                <CardRepo
                  key={repositorio.name}
                  repositorios={repositorio}
                />
              ))}
              {profile.map((profile) =>(
                <CardProfile
                  key={profile.login}
                  profile={profile}
                />
              ))}
              
          </div>
            
        </>
      )
      
