import styled from "styled-components";

export const QusestionStyle = styled.div`
  font-family: Noto Sans Kr;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${(props) => (props.media === "pc" ? "36px" : "24px")};
  line-height: 170%;
  text-align: center;
`;
