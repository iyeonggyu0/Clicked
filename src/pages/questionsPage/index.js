import { useMedia } from "../../hooks/mediaHook";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PageDiv, QusesDiv, QusestionStyle } from "./style";
import Button from "../../components/question/button";
import SelectButton from "../../components/question/selectButton";
import KidneyInput from "../../components/question/kidneyInput";

const QuestionsPage = () => {
  // eslint-disable-next-line no-unused-vars
  const media = useMedia();
  const params = useParams();
  let type = params.type;
  let paramsIdx = params.idx;

  const [text, setText] = useState("");
  const [cpA, setCpA] = useState({
    id: 0,
    Anum: 0,
    A: [{ id: "", A: "" }],
    button: "",
  });
  const [frA, setFrA] = useState({
    id: 0,
    Anum: 0,
    A: [{ id: "", A: "" }],
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
            { id: "on", A: "집에서 통화" },
            { id: "off", A: "밖에서 약속" },
          ],
        });
      } else if (paramsIdx === "2") {
        setText("나의 취미는?");
        setFrA({
          id: 2,
          Anum: 8,
          A: [
            { value: "none", label: "선택" },
            { value: "게임", label: "게임" },
            { value: "요리", label: "요리" },
            { value: "영화", label: "영화" },
            { value: "노래", label: "노래" },
            { value: "책읽기", label: "책읽기" },
            { value: "공부", label: "공부" },
            { value: "애니보기", label: "애니보기" },
            { value: "아이돌 덕질", label: "아이돌 덕질" },
            { value: "퍼즐", label: "퍼즐" },
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
              { id: "E", A: "외향적" },
              { id: "I", A: "내향적" },
            ],
          });
        } else if (paramsIdx === "5") {
          setFrA({
            id: 5,
            Anum: 2,
            A: [
              { id: "T", A: "이성적" },
              { id: "F", A: "감정적" },
            ],
          });
        } else if (paramsIdx === "6") {
          setFrA({
            id: 6,
            Anum: 2,
            A: [
              { id: "J", A: "계획적" },
              { id: "P", A: "즉흥적" },
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
            { id: 1, A: "아침" },
            { id: 2, A: "저녁" },
            { id: 3, A: "새벽" },
          ],
        });
      }
    } else if (type === "couple") {
      if (paramsIdx === "1") {
        setText("내가 가장 선호하는 데이트는?");
        setCpA({
          id: 1,
          Anum: 10,
          A: [
            { value: "none", label: "선택" },
            { value: "카페", label: "카페" },
            { value: "공원", label: "공원" },
            { value: "pc방", label: "pc방" },
            { value: "집", label: "집" },
            { value: "맛집", label: "맛집" },
            { value: "상관없음", label: "상관없음" },
          ],
        });
      } else if (paramsIdx === "2") {
        setText("나의 연인의 키는 최소");
        setCpA({
          id: 2,
          Anum: 8,
          A: [{ id: 1, A: "" }],
        });
      } else if (paramsIdx === "3") {
        setText("내가 선호하는 음식 스타일은?");
        setCpA({
          id: 3,
          Anum: 4,
          A: [
            { id: "한식", A: "한식" },
            { id: "중식", A: "중식" },
            { id: "일식", A: "일식" },
            { id: "양식", A: "양식" },
          ],
        });
      } else if (paramsIdx === "4") {
        setText("보통 연락은 하루에 몇번?");
        setCpA({
          id: 4,
          Anum: 2,
          A: [
            { id: 1, A: "5번 이하" },
            { id: 2, A: "5번 이상" },
          ],
        });
      } else if (paramsIdx === "5") {
        setText("나는 기념일을");
        setCpA({
          id: 5,
          Anum: 2,
          A: [
            { id: 1, A: "챙긴다" },
            { id: 2, A: "안챙긴다" },
          ],
        });
      } else if (paramsIdx === "6") {
        setText("연애는");
        setCpA({
          id: 6,
          Anum: 2,
          A: [
            { id: 1, A: "편해야 한다" },
            { id: 2, A: "설레야 한다" },
          ],
        });
      } else if (paramsIdx === "7") {
        setText("내가 좋아하는 얼굴상은?");
        setCpA({
          id: 7,
          Anum: 5,
          A: [
            { value: "none", label: "선택" },
            { value: "강아지", label: "강아지" },
            { value: "고양이", label: "고양이" },
            { value: "곰", label: "곰" },
            { value: "기타", label: "기타(상관없음)" },
          ],
        });
      } else if (paramsIdx === "8" || paramsIdx === "9" || paramsIdx === "10") {
        setText("나와 잘맞는 성격은?");
        if (paramsIdx === "8") {
          setCpA({
            id: 8,
            Anum: 2,
            A: [
              { id: "E", A: "외향적" },
              { id: "I", A: "내향적" },
            ],
          });
        } else if (paramsIdx === "9") {
          setCpA({
            id: 9,
            Anum: 2,
            A: [
              { id: "T", A: "이성적" },
              { id: "F", A: "감정적" },
            ],
          });
        } else if (paramsIdx === "10") {
          setCpA({
            id: 10,
            Anum: 2,
            A: [
              { id: "J", A: "계획적" },
              { id: "P", A: "즉흥적" },
            ],
          });
        }
      } else if (paramsIdx === "11") {
        setText("싸우고 나서는");
        setCpA({
          id: 11,
          Anum: 2,
          A: [
            { id: 1, A: "바로 화해한다" },
            { id: 2, A: "시간을 두고 화해한다" },
          ],
        });
      }
    }
  }, [paramsIdx, type]);
  // friend / couple

  return (
    <>
      <PageDiv>
        <QusesDiv media={media} tpye={type} className={"center"}>
          <QusestionStyle media={media} tpye={type}>
            <p>Q. {text}</p>
          </QusestionStyle>
          <Button media={media} type={type} paramsIdx={paramsIdx} frA={frA} cpA={cpA}></Button>
          <SelectButton media={media} type={type} paramsIdx={paramsIdx}></SelectButton>
          <KidneyInput media={media} type={type} paramsIdx={paramsIdx}></KidneyInput>
        </QusesDiv>
      </PageDiv>
    </>
  );
};
export default QuestionsPage;
