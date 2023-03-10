
import { Input } from "../../componentes/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../componentes/Button";

import { Container, Form, Background } from "./styles";
export function SignIn(){

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerencia seus links uteis.</p>
        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail}/>
        <Input placeholder="Senha" type="password" icon={FiLock}/>
   
        <Button name="Entrar"/>
        <a href="">Criar conta</a>

      </Form>
      <Background/>

    </Container>
  )
}