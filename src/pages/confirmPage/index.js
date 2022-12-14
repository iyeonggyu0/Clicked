import PcProfileComponents from "../../components/profile/pc";
import { useContext } from "react";
import { SelectDataContext } from "../../context/selectContext";
import { useMedia } from "../../hooks/mediaHook";
import { userProfile } from "../../datas/userProfile";

import { ConfirmPageStyle } from "./style";
import { useParams } from "react-router-dom";

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
      return user.line === state.line && (user.hobby[0] === state.hobby || user.hobby[1] === state.hobby || user.hobby[2] === state.hobby || user.hobby[3] === state.hobby) && user.friendCall === state.friendCall && user.spicy === state.spicy && user.time === state.time && user.mbti[0] === state.IE && user.mbti[1] === state.TF && user.mbti[2] === state.JP;
    } else if (type === "couple") {
    }
  });

  console.log(filterProfile);

  return (
    <ConfirmPageStyle media={media}>
      {/* {filterProfile.map((state, key) => (
        <PcProfileComponents key={state.id} data={filterProfile[key]} />
      ))} */}
      <PcProfileComponents media={media} dataState={filterProfile} />
    </ConfirmPageStyle>
  );
};
export default ConfirmPage;
