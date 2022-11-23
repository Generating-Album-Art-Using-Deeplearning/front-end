import React from "react";
import * as Styled from "./styled";
import * as PageStyled from "../pageStyled";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  return (
    <PageStyled.Container>
      <Styled.Container>
        <Styled.ResultTitle>
          생성한 <span className="textAA">앨범아트</span> 목록
        </Styled.ResultTitle>
        <Styled.AlbumArtListContainer>
          <img
            className="item_img"
            src={`${process.env.PUBLIC_URL}/public_assets/${Math.floor(Math.random() * 6)}.png`}
          />
          ;
        </Styled.AlbumArtListContainer>
        <Styled.ReAnalyze>
          <input onClick={() => navigate("/")} type="button" value="홈으로 돌아가기" />
        </Styled.ReAnalyze>
      </Styled.Container>
    </PageStyled.Container>
  );
}

export default Result;
