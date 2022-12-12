import ProfileComponents from "../../components/profile";
import { useContext, useEffect, useState } from "react";
import { SelectDataContext } from "../../context/selectContext";
import { useMedia } from "../../hooks/mediaHook";
import { useLocation } from "react-router-dom";
import { userProfile } from "../../datas/userProfile";

const ConfirmPage = () => {
  const media = useMedia();
  const { state, dispatch } = useContext(SelectDataContext);
  const [url, setUrl] = useState(useLocation());

  useEffect(() => {
    if (url.pathname === "/friend/9") {
      setUrl("friend");
    } else if (url.pathname === "/couple/9") {
      setUrl("couple");
    }
    dispatch({
      type: url,
      idx: 9,
    });
    // eslint-disable-next-line
  }, []);
  console.log(url);

  const [dataState, setDataState] = useState({});

  useEffect(() => {
    setDataState({ line: state.line, hobby: state.hobby, friendCall: state.friendCall, spicy: state.spicy, time: state.time, IE: state.IE, TF: state.TF, JP: state.JP });
    console.log(dataState);
  }, [state]);

  return (
    <>
      <ProfileComponents dataState={dataState} />
    </>
  );
};
export default ConfirmPage;
