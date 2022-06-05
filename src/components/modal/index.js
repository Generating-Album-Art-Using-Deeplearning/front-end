import * as React from "react";
import styled from "styled-components";
// import modalImage from "../../images/modal_image.jpg";
import { IoMdClose } from "react-icons/io";
import { BsTrash, BsFileEarmarkMusic } from "react-icons/bs";

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
  const [uploadFile, setUploadFile] = React.useState();
  const [analyzingFile, setAnalyzingFile] = React.useState(false);
  const uploadFileRef = React.useRef();

  const closeClick = () => {
    setUploadFile();
    setAnalyzingFile(false);
    setFileModal(false);
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
  return (
    <Wrapper modal={fileModal}>
      <ModalContainer>
        <CloseContainer>
          <IoMdClose size={30} onClick={closeClick} />
        </CloseContainer>
        <ContentContainer>
          {analyzingFile ? (
            <AnalyzeContent>분석 중...</AnalyzeContent>
          ) : (
            <>
              {uploadFile ? (
                <FileName>
                  <div>
                    <BsFileEarmarkMusic /> {uploadFile.name}
                  </div>
                  <div className="fileSize">
                    {Math.round((uploadFile.size / 1024 / 1024) * 10) / 10 +
                      "MB"}{" "}
                    <span className="deleteFileBtn">
                      <BsTrash onClick={deleteFileClick} />
                    </span>
                  </div>
                </FileName>
              ) : (
                <ModalText>분석에 필요한 음원 파일을 올려주세요.</ModalText>
              )}
              <FileSelect
                type="file"
                ref={uploadFileRef}
                accept="audio/*"
                onChange={onFileChange}
              ></FileSelect>
              {uploadFile ? (
                <UploadButton onClick={analyzingFileClick}>
                  분석하기
                </UploadButton>
              ) : (
                <UploadButton onClick={onFileUploadClick}>
                  파일 업로드
                </UploadButton>
              )}
            </>
          )}
        </ContentContainer>
      </ModalContainer>
    </Wrapper>
  );
}

export default FileModal;
