import { Link } from "react-router-dom";
import { ButtonStyle, ButtonDivStyle } from "./style";
import { SelectDataContext } from "../../../context/selectContext";
import { useContext } from "react";
// eslint-disable-next-line no-unused-vars

const Button = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(SelectDataContext);

  const onDispatchHandler = (e) => {
    dispatch({
      type: props.type,
      idx: props.paramsIdx,
      id: e.id,
    });
  };

  return (
    <>
      {/* 친구 */}
      <ButtonDivStyle style={{ display: props.paramsIdx === "2" || props.type === "couple" ? "none" : "flex" }} media={props.media}>
        {props.frA.A.map((A, key) => (
          <Link
            to={`/${props.type}/${parseInt(props.paramsIdx) + 1}`}
            onClick={() => {
              onDispatchHandler(A);
            }}
          >
            <ButtonStyle media={props.media} typeP={props.type} paramsIdx={props.paramsIdx} a={props.a} key={A.id}>
              {A.A}
            </ButtonStyle>
          </Link>
        ))}
      </ButtonDivStyle>

      {/* 커플 1*/}
      <ButtonDivStyle style={{ display: props.paramsIdx === "1" || props.paramsIdx === "2" || props.paramsIdx === "7" || props.type === "friend" ? "none" : "flex" }} media={props.media}>
        {props.cpA.A.map((A, key) => (
          <Link
            to={`/${props.type}/${parseInt(props.paramsIdx) + 1}`}
            onClick={() => {
              onDispatchHandler(A);
            }}
          >
            <ButtonStyle media={props.media} typeP={props.type} paramsIdx={props.paramsIdx} a={props.a} key={A.id}>
              {A.A}
            </ButtonStyle>
          </Link>
        ))}
      </ButtonDivStyle>
    </>
  );
};
export default Button;
