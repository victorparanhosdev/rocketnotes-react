import styled from "styled-components";
import {Link} from 'react-router-dom'
export const Container = styled.header`
  grid-area: header;
  height: 10.5rem;
  width: 100%;
  border: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_700};


  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
`;

export const Profile = styled(Link)`
display: flex;
align-items: center;

&:hover {
  filter: none;
}
> img {
  width: 5.6rem;
  height: 5.6rem;
  object-fit: cover;
  border-radius: 50%;
}
> div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.6rem;
  line-height: 2.4rem;
  span {
    font-size: 1.4rem;
    color: ${({theme})=> theme.COLORS.GRAY_100};
  }
  strong {
    font-size: 1.8rem;
    color: ${({theme})=> theme.COLORS.WHITE};
  }
}



`;

export const Logout = styled(Link)`
border: none;
background: none;
display: flex;

> svg {
  font-size: 3.6rem;
  color: ${({theme})=> theme.COLORS.GRAY_100};
}

`