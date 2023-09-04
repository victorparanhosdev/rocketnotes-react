import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root{
  font-size: 62.5%;
}

body {
 
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme})=> theme.COLORS.WHITE};
}

body * {
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
}
a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}
button:hover, a:hover {
  filter: brightness(0.9);
}


`;