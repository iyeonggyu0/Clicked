// import PcProfileComponents from "../../components/profile/pc";
import { useContext } from "react";
import { SelectDataContext } from "../../context/selectContext";
import { useMedia } from "../../hooks/mediaHook";
import { userProfile } from "../../datas/userProfile";

import { ConfirmPageStyle } from "./style";
import { useParams } from "react-router-dom";
import ProfileComponents from "../../components/profile";

const ConfirmPage = () => {
  const media = useMedia();
  // eslint-disable-next-line
  const { state, dispatch } = useContext(SelectDataContext);
  const params = useParams();
  let type = params.type;

  console.log(state);

  // eslint-disable-next-line
  const filterProfile = userProfile.user.filter((user) => {
    if (type === "friend") {
      return user.line === state.line && (state.hobby === "상관없음" ? true : user.hobby[0] === state.hobby || user.hobby[1] === state.hobby || user.hobby[2] === state.hobby || user.hobby[3] === state.hobby) && user.friendCall === state.friendCall && user.spicy === state.spicy && user.time === state.time && user.mbti[0] === state.IE && user.mbti[1] === state.TF && user.mbti[2] === state.JP;
    } else if (type === "couple") {
      return user.kidney >= state.kidney && user.meal === state.meal && user.coupleCall === state.coupleCall && user.anniversary === state.anniversary && user.stlye === state.stlye && user.fight === state.fight && user.mbti[0] === state.IE && user.mbti[1] === state.TF && user.mbti[2] === state.JP && (state.mfn === "m" ? user.id > 16 : state.mfn === "f" ? user.id < 17 : true) && (state.datingPlace === "상관없음" ? true : user.datingPlace[0] === state.datingPlace || user.datingPlace[1] === state.datingPlace || user.datingPlace[2] === state.datingPlace || user.datingPlace[3] === state.datingPlace) && (state.impression === "상관없음" ? true : user.impression === state.impression);
    }
  });

  console.log(filterProfile);

  return (
    <ConfirmPageStyle media={media}>
      {filterProfile.map((state, key) => (
        <ProfileComponents key={state.id} data={filterProfile[key]} />
      ))}
    </ConfirmPageStyle>
  );
};
export default ConfirmPage;
