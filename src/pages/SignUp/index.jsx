
import { Input } from "../../componentes/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../componentes/Button";

import { Container, Form, Background } from "./styles";
export function SignUp(){

  return(
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerencia seus links uteis.</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser}/>
        <Input placeholder="E-mail" type="text" icon={FiMail}/>
        <Input placeholder="Senha" type="password" icon={FiLock}/>
   
        <Button name="Cadastrar"/>
        <a href="">Voltar para o login</a>

      </Form>
      

    </Container>
  )
}