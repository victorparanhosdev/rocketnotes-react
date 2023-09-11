import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../componentes/Header';
import { ButtonText } from '../../componentes/ButtonText';

import {FiPlus, FiSearch} from 'react-icons/fi'
import { Input } from '../../componentes/Input';
import { Section } from '../../componentes/Section';
import { Note } from '../../componentes/Note';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export function Home(){
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagsSelected(tagname){
    if(tagname === "all"){
      return setTagsSelected([])
    }
    const alreadySelected = tagsSelected.includes(tagname)
    
    if(alreadySelected){
      const filteredTagsSelected = tagsSelected.filter(tag=> tag !== tagname)
      setTagsSelected(filteredTagsSelected)
    }else {
      setTagsSelected(prevState => [...prevState, tagname])
    }

    
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(()=> {
    async function fetchTags(){
        const response = await api.get("/tags")
        setTags(response.data)
    }

    fetchTags()
  }, [])

  
  useEffect(()=> {
    async function fetchNotes(){

        const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
        setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])

  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header/>
      <Menu>
        <li><ButtonText onClick={()=> handleTagsSelected("all")} title="Todos" isActive={tagsSelected.length === 0} /></li>
        {
          tags && tags.map(tag=> <li key={tag.id} ><ButtonText isActive={tagsSelected.includes(tag.name)}  onClick={()=> handleTagsSelected(tag.name)} title={tag.name}/></li>)
        }
      </Menu>
      <Search>
        <Input onChange={e=> setSearch(e.target.value)} placeholder="Pesquisar pelo titulo" icon={FiSearch} />

      </Search>
      <Content>
        <Section title="Minhas Notas">
         {notes && notes.map(note =>  <Note onClick={()=> handleDetails(note.id)} key={String(note.id)} data={note}/>)}
        </Section>

      </Content>
      <NewNote to="/new">
        <FiPlus /> Criar Nota

      </NewNote>


    </Container>


  );

}