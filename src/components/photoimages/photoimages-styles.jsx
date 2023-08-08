import styled from 'styled-components'

export const DropDown = styled.div`
.drop{
  background-color:blue;
}

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

export const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`

export const Panel = styled.div``
