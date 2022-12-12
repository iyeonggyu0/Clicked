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
    { value: "game", label: "게임" },
    { value: "cook", label: "요리" },
    { value: "move", label: "영화" },
    { value: "song", label: "노래" },
    { value: "book", label: "책읽기" },
    { value: "study", label: "공부" },
    { value: "anie", label: "애니보기" },
    { value: "virtue", label: "아이돌 덕질" },
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
