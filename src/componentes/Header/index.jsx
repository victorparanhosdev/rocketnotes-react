import {Container, Profile, Logout} from './style'
import {RiShutDownLine} from 'react-icons/ri'
import {useAuth} from "../../hooks/auth"
export function Header(){
  const {signOut} = useAuth()
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/victorparanhosdev.png" alt="Foto do Perfil"/>

        <div>
          <span>Bem-Vindo</span>
          <strong>Victor Paranhos Costa</strong>
        </div>
      </Profile>
    <Logout onClick={signOut}>
    <RiShutDownLine/>
    </Logout>
   

      
    </Container>
  )
}