import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 6.4rem 0;
  }
`

export const Links = styled.ul`
li {
  margin-top: 1.2rem;
}

a{
  color: ${({theme})=> theme.COLORS.WHITE};
}


`;

export const Content = styled.div`
max-width: 55rem;
margin: 0 auto;
display: flex;
flex-direction: column;

> button{
  place-self: end;
}
> h1{
  font-size: 3.6rem;
  padding-top: 6.4rem;
  font-weight: 500;
}
> p {
  font-size: 1.6rem;
  margin-top: 1.6rem;
  text-align: justify;
}

`