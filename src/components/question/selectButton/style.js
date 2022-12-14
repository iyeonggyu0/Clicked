import styled from "styled-components";

export const SelectButtonDivStyle = styled.div`
  width: 70%;
  height: 50px;
  margin: 0 auto;

  margin-top: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const SelectDivStyle = styled.div`
  position: relative;
  width: ${(props) => (props.media === "pc" ? "200px" : "60vw")};
  height: 50px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.typeP === "friend" ? "#a0dec4" : "f3c2bd")};
  margin-bottom: ${(props) => (props.media === "pc" ? "" : "30px")};
`;
