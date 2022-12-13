import { useParams } from "react-router-dom";
import { ProfilePcStyle, ProfilePc, TextDivPc, ProfilePc_1, Hobby } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const PcProfileComponents = (props) => {
  const params = useParams();
  let type = params.type;

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

    // datingPlace: props.data.datingPlace,
    // meal: props.data.meal,
    // coupleCall: props.data.coupleCall,
    // anniversary: props.data.anniversary,
    // stlye: props.data.stlye,
    // impression: props.data.impression,
    // fight: props.data.fight,
    // arguement: props.data.arguement,
  };

  return (
    <ProfilePcStyle type={type}>
      <ProfilePc className="center">
        {/*eslint-disable-next-line*/}
        <ProfilePc_1>
          <div className="center"></div>
        </ProfilePc_1>
        <div className="div2">
          <TextDivPc>
            <div className="div">
              <p>{propsUserData.name}</p>
              <div className="div_div">
                <FontAwesomeIcon icon={solid("person")} className={"icon"} style={{ color: propsUserData.id <= 16 ? "black" : "lightgrey" }} />
                <FontAwesomeIcon icon={solid("person-dress")} className={"icon"} style={{ color: propsUserData.id > 16 ? "black" : "lightgrey" }} />
                <FontAwesomeIcon icon={solid("signal")} className={"icon icon_signal"} style={{ color: propsUserData.line === "on" ? "black" : "lightgrey" }} />
              </div>
            </div>
            <p>
              age&nbsp;:&nbsp; {propsUserData.age}
              <br />
              Student ID&nbsp;:&nbsp; {propsUserData.id}
            </p>
            <p>취미</p>
            <div className="flex">
              {propsUserData.hobby.map((hobby, key) => (
                <Hobby key={hobby.id}>{hobby}</Hobby>
              ))}
            </div>
            <div>
              <p className="memo">Memo</p>
              <p style={{ marginTop: "0px", fontWeight: "400" }}>
                &nbsp;&nbsp;- 연락 {propsUserData.friendCall}
                <br />
                &nbsp;&nbsp;- {propsUserData.time}형 인간
                <br />
                &nbsp;&nbsp;- 매운 음식 {propsUserData.spicy}
                <br />
                &nbsp;&nbsp;- {propsUserData.IE} ◾ {propsUserData.TF} {propsUserData.JP}
              </p>
            </div>
          </TextDivPc>
        </div>
      </ProfilePc>
    </ProfilePcStyle>
  );
};
export default PcProfileComponents;
