import styled from "styled-components";

export const MainPageStyle = styled.div`
  width: 100vw;
  height: 200vh;
  position: relative;

  .center {
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -50%);
  }
  .centerText {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
`;

export const MainLogo = styled.div`
  width: ${(props) => (props.media === "pc" ? "550px" : "85%")};
  height: ${(props) => (props.media === "pc" ? "200px" : "20%")};

  background-image: url(/img/logo_color.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

export const Div = styled.div`
  height: 100vh;

  display: flex;
  flex-wrap: ${(props) => (props.media === "pc" ? "nowrap" : "wrap")};
  justify-content: space-evenly;

  div {
    margin-top: 15%;
    width: ${(props) => (props.media === "pc" ? "35vw" : "90vw")};
    height: ${(props) => (props.media === "pc" ? " 35vw" : "90vw")};
    border-radius: 15px;

    position: relative;

    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100%;
  }

  .img1 {
    background-image: url(/img/fr.jpg);
    transition: all 0.5s;
    color: ${(props) => (props.media === "pc" ? "rgba(0, 0, 0, 0)" : "#ffffff")};
    background-color: ${(props) => (props.media === "pc" ? "rgba(0, 0, 0, 0);" : "rgba(103, 103, 103, 0.7)")};
    background-blend-mode: multiply;
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }

  .img1:hover {
    background-color: rgba(103, 103, 103, 0.7);
    background-image: url(/img/fr.jpg);
    background-size: 105%;
    background-blend-mode: multiply;

    color: #ffffff;
  }

  .img2 {
    background-image: url(/img/cp.jpg);
    background-position-y: -150px;
    transition: all 0.5s;
    color: ${(props) => (props.media === "pc" ? "rgba(0, 0, 0, 0)" : "#ffffff")};
    background-color: ${(props) => (props.media === "pc" ? "rgba(0, 0, 0, 0);" : "rgba(103, 103, 103, 0.7)")};
    background-blend-mode: multiply;

    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }

  .img2:hover {
    background-color: rgba(103, 103, 103, 0.7);
    background-image: url(/img/cp.jpg);
    background-size: 105%;
    background-blend-mode: multiply;

    color: #ffffff;
  }
`;
