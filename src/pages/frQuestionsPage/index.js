import { useMedia } from "../../hooks/mediaHook";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { QusestionStyle } from "./style";
import Button from "../../components/question/button";

const QuestionsPage = () => {
  const media = useMedia();
  const params = useParams();
  let type = params.type;
  let praamsIdx = params.idx;
  console.log(media, params, praamsIdx);

  const [text, setText] = useState("");

  useEffect(() => {
    if (praamsIdx === "1") {
      setText("친구와 더 자주 하고싶은것은?");
    } else if (praamsIdx === "2") {
      setText("나의 취미는?");
    } else if (praamsIdx === "3") {
      setText("친구와의 연락빈도는?");
    } else if (praamsIdx === "4" || praamsIdx === "5" || praamsIdx === "6") {
      setText("나는");
    } else if (praamsIdx === "7") {
      setText("나는 매운 음식을");
    } else if (praamsIdx === "8") {
      setText("나의 활동시간은?");
    }
  }, [praamsIdx]);

  return (
    <>
      <QusestionStyle media={media} tpye={type}>
        <p>Q. {text}</p>
      </QusestionStyle>
      <Button media={media} type={type}>
        console.log(type)
      </Button>
    </>
  );
};
export default QuestionsPage;
