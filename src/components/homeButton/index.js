import * as React from "react";
import * as Styled from "./styled";

function HomeButton({ btnClick }) {
  return (
    <Styled.Container>
      <input type="button" value="시작하기" onClick={btnClick} />
    </Styled.Container>
  );
}

export default HomeButton;
