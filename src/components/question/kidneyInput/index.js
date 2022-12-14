import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectDataContext } from "../../../context/selectContext";
import { KidneyInputDivStyle } from "./style";
import { ButtonStyle } from "../button/style";

const KidneyInput = (props) => {
  const [value, setValue] = useState(140);
  // eslint-disable-next-line
  const { state, dispatch } = useContext(SelectDataContext);
  const linkUrl = useNavigate();

  const onBottonHandler = () => {
    linkUrl(`/${props.type}/${parseInt(props.paramsIdx) + 1}`);
    dispatch({
      type: props.type,
      idx: props.paramsIdx,
      id: Number(value),
    });
  };

  //
  return (
    <KidneyInputDivStyle style={{ display: props.paramsIdx === "2" && props.type === "couple" ? "flex" : "none" }}>
      <div class="range-input">
        <input type="range" min="140" max="190" step="5" style={{ width: props.media === "pc" ? "500px" : "60vw" }} onMouseUp={(e) => setValue(e.target.value)} onTouchEnd={(e) => setValue(e.target.value)} />
        <div class="value">
          <div>{value}</div>
        </div>
      </div>
      <ButtonStyle media={props.media} typeP={props.type} paramsIdx={props.paramsIdx} style={{ marginTop: props.media === "pc" ? "" : "30px", width: props.media !== "pc" ? "80vw" : "" }} onClick={onBottonHandler}>
        다음
      </ButtonStyle>
    </KidneyInputDivStyle>
  );
};

export default KidneyInput;
