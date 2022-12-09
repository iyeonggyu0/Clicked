import { Link } from "react-router-dom";
import { ButtonStyle, ButtonDivStyle } from "./style";
// eslint-disable-next-line no-unused-vars

const Button = (props) => {
  return (
    <>
      {/* 친구 */}
      <ButtonDivStyle style={{ display: props.paramsIdx === "2" || props.type === "couple" ? "none" : "flex" }} media={props.media}>
        {props.frA.A.map((A, key) => (
          <Link to={`/${props.type}/${parseInt(props.paramsIdx) + 1}`}>
            <ButtonStyle media={props.media} typeP={props.type} paramsIdx={props.paramsIdx} a={props.a} key={A.id}>
              {A.A}
            </ButtonStyle>
          </Link>
        ))}
      </ButtonDivStyle>

      {/* 커플 */}
      <ButtonDivStyle style={{ display: props.type === "friend" ? "none" : "flex" }} media={props.media}>
        {props.cpA.A.map((A, key) => (
          <Link to={`/${props.type}/${parseInt(props.paramsIdx) + 1}`}>
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
