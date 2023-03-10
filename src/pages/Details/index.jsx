import {Container, Links, Content} from './styles'

import {Button} from '../../componentes/Button/'
import {Header} from '../../componentes/Header'
import {Section} from '../../componentes/Section'
import {ButtonText} from '../../componentes/ButtonText'
import {Tag} from '../../componentes/Tags'

export function Details() {

  return(
    <Container>
      <Header/>
      

      <main>
          <Content>
          <ButtonText isActive title="Excluir Nota"/>

          <h1>Introdução React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae minima sapiente est iusto eaque, veritatis perspiciatis explicabo nobis ipsum saepe aspernatur eius nesciunt, officiis inventore. Esse repellat est inventore.</p>
            <Section title="Links úteis">
              <Links>
                <li><a href="#">http://www.victor.com.br</a></li>
                <li><a href="#">http://www.victor.com.br</a></li>
              </Links> 
            </Section>
            
            <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="node"/>
            </Section>

              <Button name="Voltar"/>

          </Content>
      </main>
    </Container>
  )
}