import React, { useEffect } from "react";
import { useMedia } from "../../hooks/mediaHook";

// style
import { MainPageStyle, MainLogo, Div } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  const media = useMedia();

  useEffect(() => {
    // AOS Library 초기화
    AOS.init();
  });
  return (
    <MainPageStyle>
      <div style={{ height: "100vh" }}>
        <MainLogo media={media} className={"center"}></MainLogo>
      </div>
      <Div media={media}>
        <Link to="/" data-aos="fade-up" data-aos-duration="1500">
          <div className="img1">
            <p className={"centerText"}>친구찾기</p>
          </div>
        </Link>
        <Link to="/" data-aos="fade-up" data-aos-duration="1500">
          <div className="img2">
            <p className={"centerText"}>연인찾기</p>
          </div>
        </Link>
      </Div>
    </MainPageStyle>
  );
};
export default MainPage;
