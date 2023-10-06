import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavLink = styled(Link)`
  font-size: .4rem;
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
export const NavigationContainer = styled.div`
  font-size:10px;
  button{
    font-size:.4rem;
  }
`;
/*
export const TheLink = styled.link`
color: yellowLink jav;
  font-size: .5rem;
  color:black;
  background-color:red;
  &:visited{
    color:yellow;
  }
  &:hover{
    color: white;
  }
  &.active {color:purple;}
  .redirect{
    color:yellow;
  }
`;
*/
export const DropDown = styled.div`
  font-size:10px;
  width:7rem;
  height: 7rem;
  background-color:grey;
  display: flex;
  right:0px;
  top:0px;
  position: absolute;
  z-index: 2;
  border-radius: 1rem;
  overflow-y:scroll;
}`
