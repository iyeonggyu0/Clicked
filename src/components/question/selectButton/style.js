import styled from "styled-components";

export const SelectButtonDivStyle = styled.div`
  width: 70%;
  height: 50px;
  margin: 0 auto;

  margin-top: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const SelectDivStyle = styled.div`
  position: relative;
  width: ${(props) => (props.media === "pc" ? "200px" : "60vw")};
  height: 50px;
  border-radius: 4px;
  border: 1px solid #a0dec4;
  margin-bottom: ${(props) => (props.media === "pc" ? "" : "30px")};
`;
