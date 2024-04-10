import { BaseLinkPrimary } from "../../../styles/components/Button";
import {
  Container,
  HeadingTitle,
  Paragraph,
} from "../../../styles/global/default";
import { SectionTitleWrapper } from "./SectionTitle.styles";
import PropTypes from "prop-types";

const SectionTitle = ({ title, text, rightContenType }) => {
  return (
    <SectionTitleWrapper>
      <Container>
        <div className="title-grid flex items-center justify-between flex-wrap">
          <div className="title-left">
            <HeadingTitle>{title}</HeadingTitle>
            <Paragraph>{text}</Paragraph>
          </div>
          <div className="title-right">
            {rightContenType === "title-button" && (
              <BaseLinkPrimary>
                <span className="btn-text">Ask a Question</span>
              </BaseLinkPrimary>
            )}
          </div>
        </div>
      </Container>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  rightContenType: PropTypes.string,
};
