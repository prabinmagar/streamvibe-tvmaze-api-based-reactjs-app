import errorConstants from "../../../constant/errorConstants";
import { ErrorMessageWrapper } from "./ErrorMessage.styles";
import { Images } from "../../../assets/images";
import PropTypes from "prop-types";
import { Container, HeadingTitleMd } from "../../../styles/global/default";

const ErrorMessage = ({ error }) => {
  const displayErrorImage = () => {
    if (error?.code === errorConstants.ERR_404) {
      return (
        <img className="error-img" src={Images.Error404} alt="error 404" />
      );
    } else if (error?.code === errorConstants.ERR_429) {
      return (
        <img className="error-img" src={Images.Error429} alt="error 429" />
      );
    } else {
      return (
        <img className="error-img" src={Images.ErrorNoData} alt="error 429" />
      );
    }
  };
  return (
    <ErrorMessageWrapper className="text-center top-spacing-fix">
      <Container>
        <div className="error-content flex flex-col justify-between items-center">
          {displayErrorImage()}
          <HeadingTitleMd className="error-title">
            {error?.message}
          </HeadingTitleMd>
        </div>
      </Container>
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.object,
};
