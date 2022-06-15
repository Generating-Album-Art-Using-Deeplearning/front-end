import styled from "styled-components";

export const Container = styled.div``;
export const ResultTitle = styled.div`
  color: white;
  font-size: 52px;
  font-weight: 700;
  margin: 3rem 0 0 4rem;

  .textAA {
    color: #ff4487;
  }
`;

export const AlbumArtListContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
  padding: 0 50px 0 50px;
  .item_img {
    margin: 0 90px 60px 90px;
    width: 250px;
    height: 250px;
  }
`;

export const ReAnalyze = styled.div`
  margin-bottom: 20px;
  text-align: center;
  input {
    cursor: pointer;
    color: white;
    font-size: 24px;
    font-weight: 900;
    padding: 10px 90px 10px 90px;
    border-radius: 30px;
    background: none;
    border: 3px solid white;
    &:hover {
      opacity: 0.5;
    }
  }
`;
