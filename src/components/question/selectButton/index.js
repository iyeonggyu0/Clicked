import { SelectDivStyle, SelectButtonDivStyle } from "./style";
import { ButtonStyle } from "../button/style";
import Select from "react-select";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectDataContext } from "../../../context/selectContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectButton = (props) => {
  const frOptions = [
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
  ];

  const cpOptions = [
    { value: "none", label: "선택" },
    { value: "카페", label: "카페" },
    { value: "공원", label: "공원" },
    { value: "pc방", label: "pc방" },
    { value: "집", label: "집" },
    { value: "맛집", label: "맛집" },
    { value: "상관없음", label: "상관없음" },
  ];

  const cpOptions2 = [
    { value: "none", label: "선택" },
    { value: "강아지", label: "강아지" },
    { value: "고양이", label: "고양이" },
    { value: "곰", label: "곰" },
    { value: "기타", label: "기타(상관없음)" },
  ];

  const [selectOptions, setSelectOptions] = useState();

  useEffect(() => {
    if (props.paramsIdx === "2" && props.type === "friend") {
      setSelectOptions(frOptions[0]);
    } else if (props.paramsIdx === "1" && props.type === "couple") {
      setSelectOptions(cpOptions[0]);
    } else if (props.paramsIdx === "7" && props.type === "couple") {
      setSelectOptions(cpOptions2[0]);
    }
    //eslint-disable-next-line
  }, []);

  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(SelectDataContext);
  const linkUrl = useNavigate();

  const onBottonHandler = () => {
    if (selectOptions.value === "none") {
      alert("선택해 주세요");
    } else {
      linkUrl(`/${props.type}/${parseInt(props.paramsIdx) + 1}`);
      dispatch({
        type: props.type,
        idx: props.paramsIdx,
        id: selectOptions.value,
      });
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <SelectButtonDivStyle media={props.media} style={{ display: props.paramsIdx === "2" && props.type === "friend" ? "flex" : "none" }}>
        <SelectDivStyle media={props.media} typeP={props.type}>
          <Select
            onChange={setSelectOptions}
            options={frOptions}
            defaultValue={frOptions[0]}
            placeholder={"선택"}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: props.media === "pc" ? "200px" : "60vw",
                height: "50px",
                borderColor: state.isFocused ? "#a0dec4" : "#a0dec4",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 4,
              colors: {
                ...theme.colors,
                primary25: "#a0dec4",
                primary: "#a0dec4",
              },
            })}
          />
        </SelectDivStyle>
        <ButtonStyle media={props.media} typeP={props.type} paramsIdx={props.paramsIdx} onClick={onBottonHandler}>
          다음
        </ButtonStyle>
      </SelectButtonDivStyle>

      {/* 커플 1번 */}

      <SelectButtonDivStyle media={props.media} style={{ display: props.paramsIdx === "1" && props.type === "couple" ? "flex" : "none" }}>
        <SelectDivStyle media={props.media} typeP={props.type}>
          {/* couple */}
          <Select
            onChange={setSelectOptions}
            options={cpOptions}
            defaultValue={cpOptions[0]}
            placeholder={"선택"}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: props.media === "pc" ? "200px" : "60vw",
                height: "50px",
                borderColor: state.isFocused ? "#f3c2bd" : "#f3c2bd",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 4,
              colors: {
                ...theme.colors,
                primary25: "#f3c2bd",
                primary: "#f3c2bd",
              },
            })}
          />
        </SelectDivStyle>
        <ButtonStyle media={props.media} typeP={props.type} paramsIdx={props.paramsIdx} onClick={onBottonHandler}>
          다음
        </ButtonStyle>
      </SelectButtonDivStyle>

      {/* 커플 7번 */}
      <SelectButtonDivStyle media={props.media} style={{ display: props.paramsIdx === "7" && props.type === "couple" ? "flex" : "none" }}>
        <SelectDivStyle media={props.media} typeP={props.type}>
          {/* couple */}
          <Select
            onChange={setSelectOptions}
            options={cpOptions2}
            defaultValue={cpOptions2[0]}
            placeholder={"선택"}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: props.media === "pc" ? "200px" : "60vw",
                height: "50px",
                borderColor: state.isFocused ? "#f3c2bd" : "#f3c2bd",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 4,
              colors: {
                ...theme.colors,
                primary25: "#f3c2bd",
                primary: "#f3c2bd",
              },
            })}
          />
        </SelectDivStyle>
        <ButtonStyle media={props.media} typeP={props.type} paramsIdx={props.paramsIdx} onClick={onBottonHandler}>
          다음
        </ButtonStyle>
      </SelectButtonDivStyle>
    </>
  );
};
export default SelectButton;
