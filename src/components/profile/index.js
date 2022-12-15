import { useParams } from "react-router-dom";
import { useMedia } from "../../hooks/mediaHook";

import { ProfileStyle, ProfileDiv, ProfileImgDiv, ProfileImgDiv2, ProfileNameDiv, Hobby, HobbyDiv, MemoDiv } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ProfileComponents = (props) => {
  const params = useParams();
  const type = params.type;
  const media = useMedia();

  const propsUserData = {
    id: props.data.id,
    name: props.data.name,
    age: 18,
    kidney: props.data.kidney,

    IE: props.data.mbti[0],
    TF: props.data.mbti[1],
    JP: props.data.mbti[2],

    profileImg: props.data.profileImg === "" && type === "friend" ? "/img/profileImg/profileImg_fr.png" : props.data.profileImg === "" && type === "couple" ? "/img/profileImg/profileImg_cp.png" : `${props.data.profileImg}`,
    line: props.data.line,
    hobby: props.data.hobby,
    friendCall: props.data.friendCall === 1 ? "잘 안 함" : "자주 함",
    spicy: props.data.spicy === 1 ? "못 먹음" : props.data.spicy === 2 ? "어느 정도 먹음" : props.data.spicy === 3 ? "잘 먹음" : "",
    time: props.data.time === 1 ? "아침" : props.data.time === 2 ? "저녁" : props.data.time === 3 ? "새벽" : "",

    datingPlace: props.data.datingPlace,
    meal: props.data.meal,
    coupleCall: props.data.friendCall === 1 ? "자주 안 함" : "자주 함",
    anniversary: props.data.anniversary === 1 ? "챙겨줌" : "신경 안 씀",
    impression: props.data.impression,
    fight: props.data.fight === 1 ? "바로 화해" : "시간 두고 화해",

    // id: 8,
    // name: "이영규",
    // age: 18,
    // kidney: 184,
    // profileImg: "/img/profileImg/profileImg_fr.png",
    // line: "on",
    // hobby: ["game", "move", "song", "anie"],
    // friendCall: "잘 안 함",
    // spicy: "어느 정도 먹음",
    // time: "저녁",
    // IE: "I",
    // TF: "F",
    // JP: "P",

    // datingPlace: ["공원", "pc방", "집", "맛집"],
    // meal: "한식",
    // coupleCall: "자주 안함",
    // anniversary: "챙겨줌",
    // impression: "곰",
    // fight: "시간두고 화해",
  };

  console.log(media);

  return (
    <ProfileStyle media={media} type={type}>
      <ProfileDiv className="center" media={media} type={type}>
        <ProfileImgDiv data={propsUserData.profileImg} media={media} type={type}>
          <div className="center img"></div>
        </ProfileImgDiv>
        <ProfileImgDiv2 media={media} type={type}>
          <ProfileNameDiv media={media} type={type}>
            <p>{propsUserData.name}</p>
            <div className="div_div">
              <FontAwesomeIcon icon={solid("person")} className={"icon"} style={{ color: propsUserData.id <= 16 ? "black" : "lightgrey" }} />
              <FontAwesomeIcon icon={solid("person-dress")} className={"icon"} style={{ color: propsUserData.id > 16 ? "black" : "lightgrey" }} />
              <FontAwesomeIcon icon={solid("signal")} className={"icon icon_signal"} style={{ color: propsUserData.line === "on" ? "black" : "lightgrey" }} />
              <span>{propsUserData.kidney}</span>
            </div>
          </ProfileNameDiv>
          {/* friend */}
          <div style={{ display: type === "friend" ? "block" : "none" }}>
            <p style={{ marginBottom: "10px", fontSize: "20px" }}>취미</p>
            <HobbyDiv media={media} type={type}>
              {propsUserData.hobby.map((hobby, key) => (
                <Hobby key={hobby.id} media={media} type={type} style={{ marginBottom: media === "pc" ? "0" : "5px" }}>
                  {hobby}
                </Hobby>
              ))}
            </HobbyDiv>
            <MemoDiv>
              <p className="Memo">Memo</p>
              <p>
                &nbsp;-&nbsp;&nbsp;매운 음식 {propsUserData.spicy}
                <br />
                &nbsp;-&nbsp;&nbsp;{propsUserData.time}형 인간
                <br />
                &nbsp;-&nbsp;&nbsp;연락 {propsUserData.friendCall}
                <br />
                &nbsp;-&nbsp;&nbsp;{propsUserData.IE} ◾ {propsUserData.TF} {propsUserData.JP}
              </p>
            </MemoDiv>
          </div>
          {/* couple */}
          <div style={{ display: type === "couple" ? "block" : "none" }}>
            <p style={{ marginBottom: "10px", fontSize: "16px" }}>선호하는 데이트 장소</p>
            <HobbyDiv media={media} type={type}>
              {propsUserData.datingPlace.map((hobby, key) => (
                <Hobby key={hobby.id} media={media} type={type} style={{ marginBottom: media === "pc" ? "0" : "5px" }}>
                  {hobby}
                </Hobby>
              ))}
            </HobbyDiv>
            <MemoDiv>
              <p className="Memo">Memo</p>
              <p>
                &nbsp;-&nbsp;&nbsp;{propsUserData.meal}을 좋아함
                <br />
                &nbsp;-&nbsp;&nbsp;연락을 {propsUserData.coupleCall}
                <br />
                &nbsp;-&nbsp;&nbsp;기념일 {propsUserData.anniversary}
                <br />
                &nbsp;-&nbsp;&nbsp;{propsUserData.IE} ◾ {propsUserData.TF} {propsUserData.JP}
                <br />
                &nbsp;-&nbsp;&nbsp;싸우고 {propsUserData.fight}
                <br />
              </p>
              <div className="flex">
                <span>&nbsp;-&nbsp;&nbsp;{propsUserData.impression}상</span>
                <FontAwesomeIcon icon={solid("dog")} className={" icon "} style={{ display: propsUserData.impression === "강아지" ? "block" : "none" }} />
                <FontAwesomeIcon icon={solid("cat")} className={" icon "} style={{ display: propsUserData.impression === "고양이" ? "block" : "none" }} />
                <FontAwesomeIcon icon={solid("paw")} className={" icon "} style={{ display: propsUserData.impression === "곰" ? "block" : "none" }} />
              </div>
            </MemoDiv>
          </div>
        </ProfileImgDiv2>
      </ProfileDiv>
    </ProfileStyle>
  );
};
export default ProfileComponents;
