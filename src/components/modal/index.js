import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0.5;
  display: none;
  z-index: 2;
`;
const ModalContainer = styled.div``;

function FileModal() {
  return (
    <Wrapper>
      <ModalContainer></ModalContainer>
    </Wrapper>
  );
}

export default FileModal;
