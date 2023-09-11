import {Container, Links, Content} from './styles'

import {Button} from '../../componentes/Button/'
import {Header} from '../../componentes/Header'
import {Section} from '../../componentes/Section'
import {ButtonText} from '../../componentes/ButtonText'
import {Tag} from '../../componentes/Tags'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export function Details() {
const [data, setData] = useState(null)
const navigate = useNavigate()
const params = useParams()
function handleBack(){
  navigate(-1)
}

useEffect(()=> {
  async function fetchNotes(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
  }

  fetchNotes()

}, [])
  return(
    <Container>
      <Header/>
      
    { data &&
      <main>
      <Content>
      <ButtonText isActive title="Excluir Nota"/>

      <h1>{data.title}</h1>

      <p>{data.description}</p>

      { data.links &&
        <Section title="Links úteis">
        <Links>
        {
          data.links.map(link =><li key={String(link.id)}><a href={link.url} target="_blank">{link.url}</a></li>)
        }        
        </Links>
  
        </Section>
        }

        { data.tags &&
        <Section title="Marcadores">
          {
            data.tags.map(tag=> <Tag key={String(tag.id)} title={tag.name}/>)
          }

        </Section>
        }
          <Button onClick={handleBack} name="Voltar"/>

      </Content>
      </main>


    }

    </Container>
  )
}