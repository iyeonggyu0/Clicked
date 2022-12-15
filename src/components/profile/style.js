import styled from "styled-components";

export const ProfileStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${(props) => (props.type === "friend" ? ({ theme }) => theme.profile.frBgColor : ({ theme }) => theme.profile.cpBgColor)};

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  p,
  span {
    font-family: Noto Sans Kr;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ProfileDiv = styled.div`
  color: #000;
  width: ${(props) => (props.media === "pc" ? "40vw" : "90vw")};
  height: ${(props) => (props.media === "pc" ? "50vh" : "80vh")};
  border-radius: 15px;
  background-color: #fff;

  border: 5px solid ${(props) => (props.type === "friend" ? ({ theme }) => theme.profile.frColor1 : ({ theme }) => theme.profile.cpColor1)};

  display: flex;
  justify-content: ${(props) => (props.media === "pc" ? "start" : "center")};
  flex-wrap: wrap;
  align-items: ${(props) => (props.media === "pc" ? "center" : "")};
`;

export const ProfileImgDiv = styled.div`
  width: ${(props) => (props.media === "pc" ? "50%" : "70vw")};
  height: ${(props) => (props.media === "pc" ? "100%" : "70vw")};
  margin-top: ${(props) => (props.media === "pc" ? "0" : "5%")};
  position: relative;

  .img {
    width: ${(props) => (props.media === "pc" ? "80%" : "90%")};
    height: ${(props) => (props.media === "pc" ? "80%" : "90%")};
    border-radius: 15px;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.data});
    background-position: center center;
    background-size: contain;
  }
`;

export const ProfileImgDiv2 = styled.div`
  width: ${(props) => (props.media === "pc" ? "50%" : "70vw")};
  height: ${(props) => (props.media === "pc" ? "70%" : "calc(100vh - 75%)")};

  div {
    margin-bottom: 16px;
  }
`;

export const ProfileNameDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    font-size: ${(props) => (props.media === "pc" ? "50px" : "30px")};
    font-weight: 600;
  }
  .div_div {
    height: 90%;
    margin-left: 10px;
    margin-top: 1.5%;
  }
  .icon {
    font-size: 20px;
    padding-top: ${(props) => (props.media === "pc" ? "16px" : "0")};
    padding-left: ${(props) => (props.media === "pc" ? "15px" : "0")};
    padding-right: ${(props) => (props.media === "pc" ? "0" : "15px")};
  }
  .icon_signal {
    font-size: 15px;
    display: ${(props) => (props.type !== "friend" ? "none" : "")};
  }
  span {
    font-size: 14px;
    padding-left: ${(props) => (props.media === "pc" ? "12px" : "0")};
    display: ${(props) => (props.type === "friend" ? "none" : "")};
  }
`;

export const HobbyDiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.media === "pc" ? "start" : "space-around")};
  flex-wrap: wrap;
`;

export const Hobby = styled.div`
  padding: 6px 15px;
  height: 35px;
  background-color: ${(props) => (props.type === "friend" ? ({ theme }) => theme.profile.frBgColor : ({ theme }) => theme.profile.cpBgColor)};
  border: 2px solid ${(props) => (props.type === "friend" ? ({ theme }) => theme.profile.frColor1 : ({ theme }) => theme.profile.cpColor1)};
  border-radius: 5px;
  margin-right: ${(props) => (props.media === "pc" ? "10px" : "0px")};
  text-align: center;
  line-height: 100%;
`;

export const MemoDiv = styled.div`
  width: 100%;
  line-height: 160%;
  .Memo {
    font-size: 20px;
    margin-bottom: 2%;
  }
  .icon {
    font-size: 18px;
    margin-left: 5px;
    margin-top: 4px;
  }

  .flex {
    display: flex;
  }
`;
