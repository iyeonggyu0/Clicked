import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export const useMedia = () => {
  const mediaHandler = useMediaQuery({ minWidth: 992 });
  const [media, setMedia] = useState("pc");
  useEffect(() => {
    mediaHandler === true ? setMedia("pc") : setMedia("mobile");
  }, [mediaHandler]);
  return media;
};

// const media = useMedia();

// ${(props) => (props.media === "pc" ? "140px" : "70px")};
