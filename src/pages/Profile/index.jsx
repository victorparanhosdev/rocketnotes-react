import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi"
import { Input } from "../../componentes/Input"
import { Button } from "../../componentes/Button"
import {Link} from 'react-router-dom'
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function Profile(){
  const {user, updateProfile} = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordNew, setPasswordNew] = useState()
  const [passwordOld, setPasswordOld] = useState()

  async function handleUpdate(){

    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({user})
  }

  return(
    <Container>
      <header>
        <Link to="/"><FiArrowLeft /></Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/victorparanhosdev.png" alt="Foto do Usuario" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>

        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e=> setName(e.target.value)}/>
        <Input placeholder="Email" type="text" icon={FiMail} value={email} onChange={e=> setEmail(e.target.value)} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e=> setPasswordOld(e.target.value)} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} onChange={e=> setPasswordNew(e.target.value)} />

        <Button name="Salvar" onClick={handleUpdate}/>

      </Form>

    </Container>
  )
}