import styled from "styled-components";

export const ButtonStyle = styled.div`
  width: ${(props) => (props.media === "pc" ? "200px" : "80vw")};
  border-radius: 10px;
  background-color: ${(props) => (props.tpye === "friend" ? "#A9C5B9" : "#F3C2BD")};
`;
