import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../componentes/Header';
import { ButtonText } from '../../componentes/ButtonText';

import {FiPlus, FiSearch} from 'react-icons/fi'
import { Input } from '../../componentes/Input';
import { Section } from '../../componentes/Section';
import { Note } from '../../componentes/Note';

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header/>
      <Menu>

       <li><ButtonText title="Todos" isActive /></li>
       <li><ButtonText title="React" /></li>
       <li><ButtonText title="Node" /></li>

      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />

      </Search>
      <Content>
        <Section title="Minhas Notas">
          <Note data={{title: 'React', tags:[{id: '1', name: 'react'}, { id: '2', name: 'rocketseat',}]}}/>
   
        </Section>

      </Content>
      <NewNote>
        <FiPlus /> Criar Nota

      </NewNote>


    </Container>


  );

}