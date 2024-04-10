import PropTypes from "prop-types";
import { Icons } from "../../../assets/icons";

const CustomNextArrow = ({ onClick }) => (
  <button
    className="custom-next-arrow bg-black06 flex items-center justify-center"
    onClick={onClick}
  >
    <img src={Icons.ArrowRight} alt="" />
  </button>
);

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomNextArrow;
