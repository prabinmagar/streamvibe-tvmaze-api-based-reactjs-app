import { Icons } from "../../../../assets/icons";
import routeConstants from "../../../../constant/routeConstants";
import {
  DEFAULT_SHOWS,
  HIGH_RATED_SHOWS,
  NEW_SHOWS,
} from "../../../../constant/showsConstants";
import { Text } from "../../../../styles/global/default";
import { ShowsItemWrapper } from "./ShowsItem.styles";
import PropTypes from "prop-types";

const ShowsItem = ({ itemData, itemType }) => {
  return (
    <ShowsItemWrapper to={routeConstants.SHOWS + `/${itemData?.id}`}>
      <div className="item-content bg-black10">
        <div className="item-img">
          <img src={itemData?.image?.medium} alt="" />
        </div>
        <div className="item-body">
          <div className="flex items-center justify-between flex-wrap item-info">
            <div className="item-title font-semibold">
              {itemData?.name?.length > 16
                ? itemData?.name?.substring(0, 16) + "..."
                : itemData?.name}
            </div>

            {/* displaying info as per the rating */}
            {itemType === HIGH_RATED_SHOWS && (
                <div className="rating flex items-center">
                  <img className="rating-star" src={Icons.StarRed} alt="" />
                  <Text className="rating-value text-sm">
                    {itemData?.rating?.average} / 10
                  </Text>
                </div>
              )}

              {/* displaying info as per the premiere data */}
              {itemType === NEW_SHOWS && (
                <div className="premiere flex items-center">
                  <Text className="text-sm">{itemData?.premiered}</Text>
                </div>
              )}

              {/* displaying info as per the default show card */}
              {itemType === DEFAULT_SHOWS && (
                <>
                  <div className="rating flex items-center">
                    <img className="rating-star" src={Icons.StarRed} alt="" />
                    <Text className="rating-value text-sm">
                      {itemData?.rating?.average || "NA"} / 10
                    </Text>
                  </div>
                  <div className="genre">
                    <div className="text-sm">
                      <span className="font-medium">Genre{" "}:</span>{" "}
                      <Text className="text-sm inline">
                        {itemData?.genres?.length > 0 &&
                          itemData?.genres?.join(", ")}
                      </Text>
                    </div>
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
    </ShowsItemWrapper>
  );
};

export default ShowsItem;

ShowsItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  itemType: PropTypes.string,
};
