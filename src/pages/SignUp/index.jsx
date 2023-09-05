
import { Input } from "../../componentes/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../componentes/Button";
import { Link } from 'react-router-dom'
import { Container, Form, Background } from "./styles";
import { api } from "../../services/api"
import { useState } from "react"

export function SignUp(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function HandleSignUp(){
    if(!name || !email || !password){
      return alert("Por Favor, Preencha todos os campos")
    }
    api.post("/users", {name, email, password}).then(()=> {
      alert("Usuario Cadastrado com sucesso")

    }).catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possivel Cadastrar")
      }
    })
    
  }

  return(
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerencia seus links uteis.</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} onChange={event => setName(event.target.value)}/>
        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={event => setEmail(event.target.value)}/>
        <Input placeholder="Senha" type="password" icon={FiLock} onChange={event => setPassword(event.target.value)}/>
   
        <Button onClick={HandleSignUp} name="Cadastrar"/>
        <Link to="/">Voltar para o login</Link>

      </Form>
      

    </Container>
  )
}