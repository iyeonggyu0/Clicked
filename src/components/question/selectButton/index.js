import { SelectDivStyle, SelectButtonDivStyle } from "./style";
import { ButtonStyle } from "../button/style";
import Select from "react-select";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectDataContext } from "../../../context/selectContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectButton = (props) => {
  const options = [
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
  const [selectOptions, setSelectOptions] = useState(options[0]);
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(SelectDataContext);
  const linkUrl = useNavigate();

  const onBottonHandler = () => {
    if (selectOptions.value === "none") {
      alert("취미를 선택해 주세요");
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
    <SelectButtonDivStyle media={props.media} style={{ display: props.paramsIdx === "2" && props.type === "friend" ? "flex" : "none" }}>
      <SelectDivStyle media={props.media}>
        <Select
          onChange={setSelectOptions}
          options={options}
          defaultValue={options[0]}
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
        {/* <FontAwesomeIcon icon={solid("caret-down")} className={"icoArrow"} media={props.media} /> */}
      </SelectDivStyle>
      <ButtonStyle media={props.media} typeP={props.type} paramsIdx={props.paramsIdx} onClick={onBottonHandler}>
        다음
      </ButtonStyle>
    </SelectButtonDivStyle>
  );
};
export default SelectButton;
