import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi"
import { Input } from "../../componentes/Input"
import { Button } from "../../componentes/Button"
import {Link} from 'react-router-dom'
export function Profile(){
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

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />

        <Button name="Salvar"/>

      </Form>

    </Container>
  )
}