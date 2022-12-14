import { useParams } from "react-router-dom";
import { useMedia } from "../../../hooks/mediaHook";

const ProfileComponents = () => {
  const params = useParams();
  let type = params.type;
  const media = useMedia();

  const propsUserData = {
    id: 8,
    name: "이영규",
    age: 18,
    profileImg: "/img/profileImg/profileImg_fr.png",
    line: "on",
    hobby: ["game", "move", "song", "anie"],
    friendCall: "잘 안 함",
    spicy: "어느 정도 먹음",
    time: "저녁",
    IE: "I",
    TF: "F",
    JP: "P",
    // id: props.data.id,
    // name: props.data.name,
    // age: 18,
    // kidney: props.data.kidney,

    // IE: props.data.mbti[0],
    // TF: props.data.mbti[1],
    // JP: props.data.mbti[2],

    // profileImg: props.data.profileImg === "" && type === "friend" ? "/img/profileImg/profileImg_fr.png" : props.data.profileImg === "" && type === "couple" ? "/img/profileImg/profileImg_cp.png" : `${props.data.profileImg}`,
    // line: props.data.line,
    // hobby: props.data.hobby,
    // friendCall: props.data.friendCall === 1 ? "잘 안 함" : "자주 함",
    // spicy: props.data.spicy === 1 ? "못 먹음" : props.data.spicy === 2 ? "어느 정도 먹음" : props.data.spicy === 3 ? "잘 먹음" : "",
    // time: props.data.time === 1 ? "아침" : props.data.time === 2 ? "저녁" : props.data.time === 3 ? "새벽" : "",

    // 여기부터 계속하기
    // datingPlace: props.data.datingPlace,
    // meal: props.data.meal,
    // coupleCall: props.data.coupleCall,
    // anniversary: props.data.anniversary,
    // stlye: props.data.stlye,
    // impression: props.data.impression,
    // fight: props.data.fight,
    // arguement: props.data.arguement,
  };
  return;
};
export default ProfileComponents;
