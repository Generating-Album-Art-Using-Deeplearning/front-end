import React from "react";
import * as Styled from "./styled";
import * as PageStyled from "../pageStyled";
// import SampleAlbumArt from "../../images/sample_album_art.jpg";

const albumArtList = [
  {
    id: 0,
    img: "https://ichef.bbci.co.uk/news/800/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg.webp",
  },
  {
    id: 1,
    img: "https://ichef.bbci.co.uk/news/800/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg.webp",
  },
  {
    id: 2,
    img: "https://ichef.bbci.co.uk/news/800/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg.webp",
  },
  {
    id: 3,
    img: "https://ichef.bbci.co.uk/news/800/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg.webp",
  },
  {
    id: 4,
    img: "https://ichef.bbci.co.uk/news/800/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg.webp",
  },
  {
    id: 5,
    img: "https://ichef.bbci.co.uk/news/800/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg.webp",
  },
];
function Result() {
  return (
    <PageStyled.Container>
      <Styled.Container>
        <Styled.ResultTitle>
          생성한 <span className="textAA">앨범아트</span> 목록
        </Styled.ResultTitle>
        <Styled.AlbumArtListContainer>
          {albumArtList.map((item) => {
            return <img className="item_img" src={item.img}></img>;
          })}
        </Styled.AlbumArtListContainer>
        <Styled.ReAnalyze>
          <input type="button" value="결과 재분석" />
        </Styled.ReAnalyze>
      </Styled.Container>
    </PageStyled.Container>
  );
}

export default Result;
