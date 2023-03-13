import { Header } from '../../componentes/Header';
import { Input } from '../../componentes/Input';
import { Textarea } from '../../componentes/Textarea';
import { NoteItem } from '../../componentes/NoteItem';
import { Section} from '../../componentes/Section';
import {Container, Form} from './styles';

export function New(){

  return(
    <Container>
      <Header />
      <main>
        <Form>

          <header>
            <h1>Criar Nota</h1>
            <a href="/">voltar</a>
          </header>
          <Input placeholder="Título"/>
          <Textarea placeholder="Observações"/>
          <Section title="Links úteis">

            <NoteItem value="https://victorparanhos.com"/>
            <NoteItem isNew/>

          </Section>
        </Form>
      


      </main>
    </Container>
  )
}