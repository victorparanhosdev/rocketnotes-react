import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../componentes/Header';
import { ButtonText } from '../../componentes/ButtonText';

import {FiPlus, FiSearch} from 'react-icons/fi'
import { Input } from '../../componentes/Input';
import { Section } from '../../componentes/Section';
import { Note } from '../../componentes/Note';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';

export function Home(){
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  function handleTagsSelected(tagname){
    const alreadySelected = tagsSelected.includes(tagname)
    
    if(alreadySelected){
      const filteredTagsSelected = tagsSelected.filter(tag=> tag !== tagname)
      setTagsSelected(filteredTagsSelected)
    }else {
      setTagsSelected(prevState => [...prevState, tagname])
    }

    
  }

  useEffect(()=> {
    async function fetchTags(){
        const response = await api.get("/tags")
        setTags(response.data)
    }

    fetchTags()
  }, [])

  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header/>
      <Menu>
        <li><ButtonText title="Todos" isActive={tagsSelected.length === 0} /></li>
        {
          tags && tags.map(tag=> <li key={tag.id} ><ButtonText isActive={tagsSelected.includes(tag.name)}  onClick={()=> handleTagsSelected(tag.name)} title={tag.name}/></li>)
        }
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />

      </Search>
      <Content>
        <Section title="Minhas Notas">
          <Note data={{title: 'React', tags:[{id: '1', name: 'react'}, { id: '2', name: 'rocketseat',}]}}/>
   
        </Section>

      </Content>
      <NewNote to="/new">
        <FiPlus /> Criar Nota

      </NewNote>


    </Container>


  );

}