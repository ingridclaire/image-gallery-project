import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryContainer1 = styled.div`
  color:red;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  row-gap: 20px;
  column-gap: 10px;
`;

export const Title = styled.div`
color:blue;
font-size: 20rem;
margin-top:90 rem
margin-bottom: 15 rem;
`;

export const NavLink = styled(Link)`
  font-size: .6rem;
  color:gray;
  cursor: pointer;
  &link{
    color gray;
  }
  &:visited{
    color:blue;
  }
  &:hover{
    color: red;
  }
  &:active{
    color:yellow;
  }
`;