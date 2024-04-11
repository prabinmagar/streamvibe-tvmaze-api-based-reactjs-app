import { Icons } from "../../../../assets/icons";
import { BaseLinkPrimary } from "../../../../styles/components/Button";
import {
  Container,
  HeadingTitle,
  Paragraph,
} from "../../../../styles/global/default";
import { ShowsBannerWrapper } from "./ShowsBanner.styles";
import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";

const ShowsBanner = ({ showData }) => {
  return (
    <ShowsBannerWrapper className="top-spacing-fix">
      <Container>
        <div
          className="banner-img flex justify-center items-end"
          style={{
            background: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), url(${showData?.image?.original}) top/cover no-repeat fixed`,
          }}
        >
          <div className="banner-content text-center">
            <HeadingTitle className="banner-title">
              {showData?.name}
            </HeadingTitle>
            <div
              className="summary-text"
              dangerouslySetInnerHTML={{
                __html: showData?.summary?.substring(0, 240) + " ...",
              }}
            ></div>
            <div className="banner-info flex flex-col items-center">
              <BaseLinkPrimary
                to={showData?.officialSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-text">Visit Official Site</span>
                <span className="btn-icon">
                  <FiExternalLink />
                </span>
              </BaseLinkPrimary>
              <div className="flex items-center flex-wrap banner-info-item">
                <Paragraph>
                  <span className="font-bold text-white">Genre:</span>
                  <span className="font-semibold">
                    {showData?.genres?.join(", ")}
                  </span>
                </Paragraph>
                <ul className="info-list flex items-center justify-center flex-wrap">
                  <li className="inline-flex items-center info-item">
                    <span className="info-item-icon inline-flex items-center justify-center">
                      <MdLanguage size={20} />
                    </span>
                    <span className="info-item-value">
                      {showData?.language}
                    </span>
                  </li>
                  <li className="inline-flex items-center info-item">
                    <span className="info-item-icon inline-flex items-center justify-center">
                      <img src={Icons.Star} alt="" />
                    </span>
                    <span className="info-item-value">
                      {showData?.rating?.average}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ShowsBannerWrapper>
  );
};

export default ShowsBanner;

ShowsBanner.propTypes = {
  showData: PropTypes.object.isRequired,
};
