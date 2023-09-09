import { Header } from '../../componentes/Header';
import { Input } from '../../componentes/Input';
import { Textarea } from '../../componentes/Textarea';
import { NoteItem } from '../../componentes/NoteItem';
import { Section} from '../../componentes/Section';
import { Button} from '../../componentes/Button';
import {Container, Form} from './styles';
import {Link} from 'react-router-dom';
import { useState } from 'react';


export function New(){
const [links, setLinks] = useState([])
const [newLink, setNewLinks] = useState("")
function handleAddLink(){
  setLinks(prevState => [...prevState, newLink])
  setNewLinks("")
}
function handleRemoveLink(deleted){
  setLinks(prevState => prevState.filter(link => link !== deleted))
} 

  return(
    <Container>
      <Header />
      <main>
        <Form>

          <header>
            <h1>Criar Nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input placeholder="Título"/>
          <Textarea placeholder="Observações"/>
          <Section title="Links úteis">
            {links.map((link, index )=> <NoteItem key={String(index)} value={link} onClick={()=> handleRemoveLink(link)}/>)}
            <NoteItem isNew value={newLink} onChange={e => setNewLinks(e.target.value)} onClick={handleAddLink} placeholder="Novo Link"/>

          </Section>
          <Section title="Marcadores">
            <div className="tags" >
            <NoteItem value="react"/>
            <NoteItem isNew placeholder="Nova Tag"/>
            </div>        
          </Section>

          <Button name="Salvar"/>
          
        </Form>
      


      </main>
    </Container>
  )
}