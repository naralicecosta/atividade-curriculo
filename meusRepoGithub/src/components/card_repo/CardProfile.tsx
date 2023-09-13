import { useEffect, useState } from "react"
import { ReactElement } from "react"
import { IProfile } from "./IProfile"

interface ICardProfileProps{
    profile: IProfile
}

function Apps() {
    const [profile, setProfile] = useState<IProfile[]>([])

    useEffect(() =>{
      fetch('https://api.github.com/users/naralicecosta')
      .then(resultado => resultado.json())
      .then((dados) => setProfile(dados))
      .catch(erro => console.log(erro))
    },[])

}


const CardProfile = (props:ICardProfileProps):ReactElement =>{
    return(
        <div className="cardProfile">
            <span>Perfil: {props.profile.login}</span>
            <span>{props.profile.avatar_url}</span>
            <span>Seguidores: {props.profile.followers_url}</span>
            <span>Seguindo: {props.profile.following_url}</span>
            <span>Meus repositórios: {props.profile.repos_url}</span>
        </div>
    )
}
export { CardProfile} 
export default Apps;