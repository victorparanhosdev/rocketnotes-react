import { Header } from '../../componentes/Header';
import { Input } from '../../componentes/Input';
import { Textarea } from '../../componentes/Textarea';
import { NoteItem } from '../../componentes/NoteItem';
import { Section} from '../../componentes/Section';
import { Button} from '../../componentes/Button';
import {Container, Form} from './styles';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';


export function New(){
const navigate = useNavigate()
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")

const [links, setLinks] = useState([])
const [newLink, setNewLinks] = useState("")

const [tags, setTags] = useState([])
const [newTags, setNewTags] = useState("")



function handleAddLink(){
  setLinks(prevState => [...prevState, newLink])
  setNewLinks("")
}
function handleRemoveLink(deleted){
  setLinks(prevState => prevState.filter(link => link !== deleted))
} 
function handleAddTag(){
  setTags(prevState => [...prevState, newTags])
  setNewTags("")
}
function handleRemoveTag(deleted){
  setTags(prevState => prevState.filter(tag => tag !== deleted))
} 

async function handleNewNote(){
  if(!title){
    return alert("Você precisa digitar um titulo")
  }
  if(!description){
    return alert("Você precisa digitar uma Descrição")
  }
  if(newLink){
    return alert("Você deixou um Link digitado mas não adicionou")
  }
  if(newTags){
    return alert("Você deixou uma Tag digitada mas não adicionou")
  }
  await api.post("/notes", {
    title,
    description,
    tags,
    links
  })

  alert("Notas criadas com sucesso!!")
  navigate("/");
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
          <Input onChange={e=> setTitle(e.target.value)} placeholder="Título"/>
          <Textarea onChange={e=> setDescription(e.target.value)} placeholder="Observações"/>
          <Section title="Links úteis">
            {links.map((link, index )=> <NoteItem key={String(index)} value={link} onClick={()=> handleRemoveLink(link)}/>)}
            <NoteItem isNew value={newLink} onChange={e => setNewLinks(e.target.value)} onClick={handleAddLink} placeholder="Novo Link"/>

          </Section>
          <Section title="Marcadores">
            <div className="tags" >
            {tags.map((tag, index)=> <NoteItem key={String(index)} value={tag} onClick={()=> handleRemoveTag(tag)}/>)}
            <NoteItem value={newTags} onChange={e=> setNewTags(e.target.value)} onClick={handleAddTag} isNew placeholder="Nova Tag"/>
            </div>        
          </Section>

          <Button onClick={handleNewNote} name="Salvar"/>
          
        </Form>
      


      </main>
    </Container>
  )
}