import styled from "styled-components";

export const ErrorPageStyle = styled.div`
  width: ${(props) => (props.media === "pc" ? "30vw" : "90vw")};
  height: 100vh;
  margin: 0 auto;
  background-image: url("/img/ErrorPage.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorPageDiv = styled.div`
  position: absolute;
  width: 25%;
  height: ${(props) => (props.media === "pc" ? "4%" : "2.8%")};
  border: 1px solid red;
  margin-top: 48%;
`;
