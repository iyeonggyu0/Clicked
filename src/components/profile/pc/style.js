import styled from "styled-components";

export const ProfilePcStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${(props) => (props.type === "friend" ? "#F3F9F6" : "#FFF3F5")};

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ProfilePc = styled.div`
  color: #000;
  width: 40vw;
  height: 50vh;
  border-radius: 15px;
  background-color: #fff;

  border: 5px solid ${(props) => (props.type === "friend" ? "##c5dcd5" : "#F3C2BD")};

  display: flex;
  justify-content: start;
  align-items: center;

  .div2 {
    width: 50%;
    height: 80%;
  }
`;

export const ProfilePc_1 = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  div:first-child {
    width: 15vw;
    height: 15vw;
    border-radius: 15px;
    background-image: url("/img/profileImg/profileImg_fr.png");
    background-position: center center;
    background-size: contain;
  }
`;

export const TextDivPc = styled.div`
  width: 90%;
  height: 15vw;
  font-family: Noto Sans Kr;
  .div {
    display: flex;
    flex-wrap: wrap;
    .div_div {
      height: 100%;
      margin-left: 10px;
    }
    p {
      font-size: 50px;
      font-weight: 600;
    }
    .icon {
      font-size: 20px;
      padding-left: 15px;
    }
    .icon_signal {
      padding-right: 100%;
      font-size: 15px;
      padding-top: 16px;
      padding-left: 15px;
    }
  }
  .memo {
    margin-bottom: 3px;
    font-weight: 400;
  }
  p:nth-child(2) {
    margin-top: 15px;
    line-height: 160%;
  }
  p:nth-child(3) {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .flex {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
`;

export const Hobby = styled.div`
  padding: 6px 15px;
  height: 35px;
  background-color: #f3f9f6;
  border: 2px solid #c5dcd5;
  border-radius: 5px;
  margin-right: 10px;
  text-align: center;
  line-height: 100%;
  margin-bottom: 10px;
`;
