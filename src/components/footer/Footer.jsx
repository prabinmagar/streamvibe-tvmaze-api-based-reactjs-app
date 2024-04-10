import { FOOTER_LINKS } from "../../constant/mockData";
import { Container, Paragraph, Text } from "../../styles/global/default";
import { FooterItemWrapper, FooterWrapper } from "./Footer.styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date();
  return (
    <FooterWrapper>
      <Container>
        <div className="footer-top">
          <div className="footer-list grid">
            {FOOTER_LINKS?.map((footerLink) => {
              return <FooterItem key={footerLink.id} data={footerLink} />;
            })}
          </div>
        </div>
        <div className="footer-bottom flex items-center justify-between">
          <Paragraph className="copyright-text">
            &copy; {currentYear.getFullYear()} Stream Vibe. All Rights Reserved.
          </Paragraph>
          <ul className="flex items-center flex-wrap bottom-links">
            <li>
              <Link to="/" className="bottom-link">
                <Text>Terms of use</Text>
              </Link>
            </li>
            <li>
              <Link to="/" className="bottom-link">
                <Text>Privacy Policy</Text>
              </Link>
            </li>
            <li>
              <Link to="/" className="bottom-link">
                <Text>Cookie Policy</Text>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

const FooterItem = ({ data }) => {
  return (
    <FooterItemWrapper>
      <h4 className="item-title text-xl capitalize font-semibold">
        {data.link_title}
      </h4>
      {data.link_type === "text" ? (
        <ul className="item-text-links">
          {data?.links?.map((link, index) => (
            <li key={index}>
              <Link to={link.link_url}>
                <Text className="capitalize font-medium">{link.link_name}</Text>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="item-icons-links flex items-center items-wrap">
          {data?.links?.map((link, index) => (
            <li key={index}>
              <Link
                to={link.link_url}
                className="item-icon-link bg-black10 inline-flex items-center justify-center"
              >
                <img src={link.link_icon} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </FooterItemWrapper>
  );
};

FooterItem.propTypes = {
  data: PropTypes.object,
};
