
import { Input } from "../../componentes/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../componentes/Button";
import { Link } from 'react-router-dom'

import { Container, Form, Background } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn(){
const { signIn } = useAuth()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function handleSignIn(){
  signIn({email, password})
}

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerencia seus links uteis.</p>
        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e=> setEmail(e.target.value)}/>
        <Input placeholder="Senha" type="password" icon={FiLock} onChange={e=> setPassword(e.target.value)}/>
   
        <Button name="Entrar" onClick={handleSignIn}/>
        <Link to="/register" >Criar conta</Link></Form>
      <Background/>

    </Container>
  )
}