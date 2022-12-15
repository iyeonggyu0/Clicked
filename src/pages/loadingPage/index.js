import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SelectDataContext } from "../../context/selectContext";

import "./frStyle.scss";

const LoadingPage = () => {
  // eslint-disable-next-line
  const { state, dispatch } = useContext(SelectDataContext);
  let url = "";

  const params = useLocation();
  console.log(state);

  useEffect(() => {
    if (params.pathname === "/couple/13") {
      // eslint-disable-next-line
      url = "couple";
    } else if (params.pathname === "/friend/9") {
      url = "friend";
    }
  }, [params.pathname]);

  const linkUrl = useNavigate();

  const onButtonHandler = () => {
    document.querySelectorAll(".button").forEach((button) =>
      button.addEventListener("click", (e) => {
        if (!button.classList.contains("compress")) {
          button.classList.add("compress");
          setTimeout(() => button.classList.remove("compress"), 4000);
          setTimeout(() => linkUrl(`/${url}/confirm`), 4000);
        }
        e.preventDefault();
      })
    );
  };

  return (
    <div className="buttonBody" onClick={onButtonHandler}>
      <button className="button">
        <div className="paper left"></div>
        <div className="paper middle"></div>
        <div className="paper right"></div>
        <div className="inner">
          <div className="zipper">
            <div className="line"></div>
            <div className="gradient"></div>
          </div>
          <span>결과보기</span>
          <svg viewBox="0 0 20 16">
            <polyline points="3 8.75 7.75 13.5 17 2.5"></polyline>
          </svg>
        </div>
      </button>
    </div>
  );
};
export default LoadingPage;
