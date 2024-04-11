import { useSelector } from "react-redux";
import { Icons } from "../../../assets/icons";
import { ShowMetaDataWrapper } from "./ShowMetaData.styles";
import { selectShowMetadata } from "../../../redux/selectors/showsSelectors";
import { Paragraph } from "../../../styles/global/default";

const ShowMetaData = () => {
  const metaData = useSelector(selectShowMetadata);
  console.log(metaData);
  return (
    <ShowMetaDataWrapper>
      <div className="detail-block">
        <div className="detail-block-item">
          <Paragraph className="block-item-title flex items-center justify-start">
            <span className="title-icon">
              <img src={Icons.CalendarGrey} alt="" />
            </span>
            <span className="title-text">Released Date</span>
          </Paragraph>
          <div className="block-item-body">
            <div className="block-item-pill text-md">{metaData?.premiered}</div>
          </div>
        </div>

        <div className="detail-block-item">
          <Paragraph className="block-item-title flex items-center justify-start">
            <span className="title-icon">
              <img src={Icons.LanguageGrey} alt="" />
            </span>
            <span className="title-text">Available Laguage</span>
          </Paragraph>
          <div className="block-item-body">
            <div className="block-item-pill text-md">{metaData?.language}</div>
          </div>
        </div>

        <div className="detail-block-item">
          <Paragraph className="block-item-title flex items-center justify-start">
            <span className="title-icon">
              <img src={Icons.StarGrey} alt="" />
            </span>
            <span className="title-text">Ratings</span>
          </Paragraph>
          <div className="block-item-body">
            <div className="block-item-pill text-md">
              {metaData?.rating?.average || 0} / 10
            </div>
          </div>
        </div>

        <div className="detail-block-item">
          <Paragraph className="block-item-title flex items-center justify-start">
            <span className="title-icon">
              <img src={Icons.GridGrey} alt="" />
            </span>
            <span className="title-text">Genres</span>
          </Paragraph>
          <div className="block-item-body flex items-center flex-wrap">
            {metaData?.genres?.map((genre, index) => (
              <div className="block-item-pill text-md" key={index}>
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShowMetaDataWrapper>
  );
};

export default ShowMetaData;
