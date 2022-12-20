import { useNavigate } from "react-router-dom";
import { useMedia } from "../../hooks/mediaHook";
import { ErrorPageStyle, ErrorPageDiv } from "./style";

const ErrorPage = () => {
  const media = useMedia();
  const linkUrl = useNavigate();

  const onDivHandler = () => {
    linkUrl("/");
  };

  return (
    <ErrorPageStyle media={media}>
      <ErrorPageDiv media={media} onClick={() => onDivHandler()}></ErrorPageDiv>
    </ErrorPageStyle>
  );
};
export default ErrorPage;
