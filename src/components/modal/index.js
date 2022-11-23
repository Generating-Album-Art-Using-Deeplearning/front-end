import * as React from "react";
import styled from "styled-components";
// import modalImage from "../../images/modal_image.jpg";
import { IoMdClose } from "react-icons/io";
import { BsTrash, BsFileEarmarkMusic } from "react-icons/bs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.modal ? "block" : "none")};
  z-index: 2;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 40%;
  background-color: white;
  border-radius: 10px;
`;

const CloseContainer = styled.div`
  float: right;
  margin: 10px 10px 0 0;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 70%;
`;
const ModalText = styled.div`
  margin: 60px 0 60px 0;
  font-size: 30px;
  font-weight: 500;
`;
const GenreResultText = styled.div`
  margin: 20px 0 15px 0;
  font-size: 25px;
  font-weight: 400;
`;
const GenreText = styled.div`
  margin: 15px 0 20px 0;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4;
`;
const UploadButton = styled.button`
  border: none;
  border-radius: 50px;
  background-color: #479a54;
  padding: 15px 60px 15px 60px;
  font-size: 22px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const FileSelect = styled.input`
  display: none;
`;
const FileName = styled.div`
  margin: 60px 0 60px 0;
  font-size: 30px;
  font-weight: 700;
  .fileSize {
    margin: 5px;
    font-size: 22px;
    font-weight: 500;
  }
  .deleteFileBtn {
    cursor: pointer;
  }
`;
const AnalyzeContent = styled.div`
  font-size: 30px;
  font-weight: 500;
`;
function FileModal({ fileModal, setFileModal }) {
  const navigate = useNavigate();
  const [uploadFile, setUploadFile] = React.useState();
  const [analyzingFile, setAnalyzingFile] = React.useState(false);
  const [randomTwoGenre, setRandomTwoGenre] = React.useState();
  const [weight, setWeight] = React.useState();
  const [generateCover, setGenerateCover] = React.useState(false);
  const genre = ["뉴에이지", "랩/힙합", "발라드", "일렉트로니카", "POP", "재즈"];

  const uploadFileRef = React.useRef();

  useEffect(() => {
    if (analyzingFile) {
      setTimeout(() => {
        const selectedGenre = [];
        while (selectedGenre.length < 2) {
          let oneGenre = genre.splice(Math.floor(Math.random() * genre.length), 1)[0];
          selectedGenre.push(oneGenre);
        }
        setRandomTwoGenre(selectedGenre);

        const firstWeight = (Math.floor(Math.random() * 210) + 500) / 10;
        const secondWeight = (Math.floor(Math.random() * 110) + 200) / 10;
        const thirdWeight = (Math.floor(Math.random() * 110) + 100) / 10;
        setWeight([firstWeight, secondWeight, thirdWeight]);
      }, 3000);
    }
  }, [analyzingFile]);

  const closeClick = () => {
    setUploadFile();
    setAnalyzingFile(false);
    setFileModal(false);
    setRandomTwoGenre();
    setGenerateCover(false);
    clearTimeout(window.timeOut);
  };
  const onFileUploadClick = () => {
    uploadFileRef.current.click();
  };
  const onFileChange = async (e) => {
    console.log(e.target.files[0]);
    setUploadFile(e.target.files[0]);
  };
  const deleteFileClick = () => {
    setUploadFile();
  };
  const analyzingFileClick = () => {
    setAnalyzingFile(true);
  };

  const generateCoverClick = () => {
    setGenerateCover(true);
    window.timeOut = setTimeout(() => {
      navigate("/result");
    }, 10000);
  };
  return (
    <Wrapper modal={fileModal}>
      <ModalContainer>
        <CloseContainer>
          <IoMdClose size={30} onClick={closeClick} />
        </CloseContainer>
        <ContentContainer>
          {generateCover ? (
            <AnalyzeContent>록/메탈 장르의 앨범 커버를 생성 중 입니다...</AnalyzeContent>
          ) : (
            <>
              {randomTwoGenre ? (
                <>
                  <GenreResultText>입력하신 음원의 장르 분석 결과입니다.</GenreResultText>
                  <GenreText>
                    록/메탈 {weight[0]}% <br />
                    {randomTwoGenre[0]} {weight[1]}% <br />
                    {randomTwoGenre[1]} {weight[2]}%
                  </GenreText>
                  <UploadButton onClick={generateCoverClick}>록/메탈 앨범커버 생성하기</UploadButton>
                </>
              ) : (
                <>
                  {analyzingFile ? (
                    <AnalyzeContent>장르를 분석 중 입니다...</AnalyzeContent>
                  ) : (
                    <>
                      {uploadFile ? (
                        <FileName>
                          <div>
                            <BsFileEarmarkMusic /> {uploadFile.name}
                          </div>
                          <div className="fileSize">
                            {Math.round((uploadFile.size / 1024 / 1024) * 10) / 10 + "MB"}{" "}
                            <span className="deleteFileBtn">
                              <BsTrash onClick={deleteFileClick} />
                            </span>
                          </div>
                        </FileName>
                      ) : (
                        <ModalText>분석에 필요한 음원 파일을 올려주세요.</ModalText>
                      )}
                      <FileSelect type="file" ref={uploadFileRef} accept="audio/*" onChange={onFileChange}></FileSelect>
                      {uploadFile ? (
                        <UploadButton onClick={analyzingFileClick}>분석하기</UploadButton>
                      ) : (
                        <UploadButton onClick={onFileUploadClick}>파일 업로드</UploadButton>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </ContentContainer>
      </ModalContainer>
    </Wrapper>
  );
}

export default FileModal;
