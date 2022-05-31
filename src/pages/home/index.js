import React from "react";
import * as Styled from "./styled";
import * as PageStyled from "../pageStyled";
import HomeButton from "../../components/homeButton";
import FileModal from "../../components/modal";

function Home() {
  return (
    <PageStyled.Container>
      <Styled.Container>
        <FileModal />
        <div className="heroBanner">
          <div>
            당신의 <span className="textMusic">음악</span>을 듣고
          </div>
          <div>
            새로운 <span className="textAA">앨범아트</span>를 제작합니다.
          </div>
          <HomeButton />
        </div>
      </Styled.Container>
    </PageStyled.Container>
  );
}

export default Home;
