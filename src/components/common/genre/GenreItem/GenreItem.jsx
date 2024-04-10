import { Icons } from "../../../../assets/icons";
import { GenreItemWrapper } from "./GenreItem.styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GenreItem = ({ data }) => {
  return (
    <GenreItemWrapper>
      <div className="item-content">
        <div className="item-img">
          <img src={data.thumbnail} alt="" />
        </div>
        <div className="item-body flex items-center justify-between">
          <div className="item-title font-semibold">{data.name}</div>
          <Link to="/" className="item-arrow-link">
            <img src={Icons.ArrowRight} alt="" />
          </Link>
        </div>
      </div>
    </GenreItemWrapper>
  );
};

export default GenreItem;

GenreItem.propTypes = {
  data: PropTypes.object,
};
