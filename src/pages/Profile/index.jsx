import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi"
import { Input } from "../../componentes/Input"
import { Button } from "../../componentes/Button"
import {Link} from 'react-router-dom'
import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"

export function Profile(){
  const {user, updateProfile} = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordNew, setPasswordNew] = useState()
  const [passwordOld, setPasswordOld] = useState()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)



  async function handleUpdate(){

    const User = {
      name,
      email,
      avatar: user.avatar,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({user: User, avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

  }

  return(
    <Container>
      <header>
        <Link to="/"><FiArrowLeft /></Link>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
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