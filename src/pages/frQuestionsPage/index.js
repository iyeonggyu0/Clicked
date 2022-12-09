import { useMedia } from "../../hooks/mediaHook";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PageDiv, QusesDiv, QusestionStyle } from "./style";
import Button from "../../components/question/button";

const QuestionsPage = () => {
  const media = useMedia();
  const params = useParams();
  let type = params.type;
  let paramsIdx = params.idx;
  console.log(media, params, paramsIdx);

  const [text, setText] = useState("");
  const [cpA, setCpA] = useState({
    id: 0,
    Anum: 0,
    A: [{ A: "" }],
    button: "",
  });
  const [frA, setFrA] = useState({
    id: 0,
    Anum: 0,
    A: [{ A: "" }],
    button: "",
  });

  useEffect(() => {
    if (type === "friend") {
      if (paramsIdx === "1") {
        setText("친구와 더 자주 하고싶은것은?");
        setFrA({
          id: 1,
          Anum: 2,
          A: [
            { id: 1, A: "집에서 통화" },
            { id: 1, A: "밖에서 약속" },
          ],
        });
      } else if (paramsIdx === "2") {
        setText("나의 취미는?");
        setFrA({
          id: 2,
          Anum: 8,
          A: [
            { id: 1, A: "게임" },
            { id: 2, A: "요리" },
            { id: 3, A: "영화" },
            { id: 4, A: "노래" },
            { id: 5, A: "책읽기" },
            { id: 6, A: "공부" },
            { id: 7, A: "애니보기" },
            { id: 8, A: "아이돌 덕질" },
          ],
        });
      } else if (paramsIdx === "3") {
        setText("친구와의 연락빈도는?");
        setFrA({
          id: 3,
          Anum: 2,
          A: [
            { id: 1, A: "필요할때" },
            { id: 2, A: "자주" },
          ],
        });
      } else if (paramsIdx === "4" || paramsIdx === "5" || paramsIdx === "6") {
        setText("나와 잘맞는 성격은?");
        if (paramsIdx === "4") {
          setFrA({
            id: 4,
            Anum: 2,
            A: [
              { id: 1, A: "외향적" },
              { id: 2, A: "내향적" },
            ],
          });
        } else if (paramsIdx === "5") {
          setFrA({
            id: 5,
            Anum: 2,
            A: [
              { id: 1, A: "이성적" },
              { id: 2, A: "감정적" },
            ],
          });
        } else if (paramsIdx === "6") {
          setFrA({
            id: 6,
            Anum: 2,
            A: [
              { id: 1, A: "계획적" },
              { id: 2, A: "즉흥적" },
            ],
          });
        }
      } else if (paramsIdx === "7") {
        setText("내가 선택하는 매운맛 강도는?");
        setFrA({
          id: 7,
          Anum: 2,
          A: [
            { id: 1, A: "순한맛" },
            { id: 2, A: "보통" },
            { id: 3, A: "매운맛" },
          ],
        });
      } else if (paramsIdx === "8") {
        setText("나의 활동시간은?");
        setFrA({
          id: 8,
          Anum: 2,
          A: [
            { id: 6, A: "아침" },
            { id: 2, A: "저녁" },
            { id: 3, A: "새벽" },
          ],
        });
      }
    } else if (type === "couple") {
      if (paramsIdx === "1") {
        setText("친구와 더 자주 하고싶은것은?");
        setCpA({
          id: 1,
          Anum: 2,
          A: [
            { id: 1, A: "집에서 통화" },
            { id: 1, A: "밖에서 약속" },
          ],
        });
      } else if (paramsIdx === "2") {
        setText("나의 취미는?");
        setCpA({
          id: 2,
          Anum: 8,
          A: [
            { id: 1, A: "게임" },
            { id: 2, A: "요리" },
            { id: 3, A: "영화" },
            { id: 4, A: "노래" },
            { id: 5, A: "책읽기" },
            { id: 6, A: "공부" },
            { id: 7, A: "애니보기" },
            { id: 8, A: "아이돌 덕질" },
          ],
        });
      }
    }
  }, [paramsIdx, type]);

  return (
    <>
      <PageDiv style={{ displey: paramsIdx === "9" && type === "friend" ? "none" : "block" }}>
        <QusesDiv media={media} tpye={type} className={"center"}>
          <QusestionStyle media={media} tpye={type}>
            <p>Q. {text}</p>
          </QusestionStyle>
          <Button media={media} type={type} paramsIdx={paramsIdx} frA={frA} cpA={cpA}></Button>
        </QusesDiv>
      </PageDiv>
      <div style={{ displey: paramsIdx === "9" && type === "friend" ? "block" : "none" }}></div>
    </>
  );
};
export default QuestionsPage;
