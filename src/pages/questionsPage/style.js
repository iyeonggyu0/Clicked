import styled from "styled-components";

export const QusestionStyle = styled.div`
  font-family: Noto Sans Kr;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${(props) => (props.media === "pc" ? "36px" : "24px")};
  line-height: 170%;
  text-align: center;
  color: ${({ theme }) => theme.palette.fontSubColor};
`;

export const QusesDiv = styled.div`
  width: ${(props) => (props.media === "pc" ? "70vw" : "100vw")};

  display: grid;
  align-items: center;
`;

export const PageDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
