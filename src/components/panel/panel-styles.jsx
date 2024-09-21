import styled from "styled-components";

export const DropDown = styled.div`
  .drop {
    background-color: blue;
  }
  font-size: 10px;
  width: 10rem;
  height: 10rem;
  background-color: #f8f0e3;
  display: flex;
  justify-content: center;
  right: 30px;
  top: 30px;
  position: absolute;
  z-index: 2;
  overflow-y: scroll;
  overflow-x: scroll;
  border: 2px;
`;
// ICC: unnecessary } at the end of the file, remove it
