import styled from "styled-components";

export const ConfirmPageStyle = styled.div`
  width: 100vw;
  height: 100%;
`;

export const LinkStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: ${(props) => (props.filterProfile.length === 0 ? "block" : "none")};
  p {
    font-family: Noto Sans Kr;
    font-size: 36px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
