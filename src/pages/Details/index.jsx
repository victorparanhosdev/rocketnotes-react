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
          <ButtonText title="Excluir Nota"/>
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