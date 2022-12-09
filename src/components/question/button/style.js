import styled from "styled-components";

export const ButtonDivStyle = styled.div`
  width: 70%;
  height: 50px;
  margin: 0 auto;

  margin-top: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ButtonStyle = styled.div`
  width: ${(props) => (props.media === "pc" ? "200px" : "60vw")};
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => (props.typeP === "friend" ? "#a0dec4" : "#F3C2BD")};

  font-family: Noto Sans Kr;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${(props) => (props.media === "pc" ? "18px" : "16px")};
  line-height: ${(props) => (props.media === "pc" ? "250%" : "300%")};
  text-align: center;
  color: #736b6b;
  margin-bottom: 30px;
  transition: all 1s;

  &:hover {
    background-color: ${(props) => (props.typeP === "friend" ? "#83b7a1" : "#E9A69F")};
    font-size: ${(props) => (props.media === "pc" ? "19px" : "17px")};
  }
`;
