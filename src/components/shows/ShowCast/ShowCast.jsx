import { selectShowCast } from "../../../redux/selectors/showsSelectors";
import { useSelector } from "react-redux";
import { ShowCastWrapper } from "./ShowCast.styles";
import CustomNextArrow from "../../common/slider/CustomNextArrow";
import CustomPrevArrow from "../../common/slider/CustomPrevArrow";
import Slider from "react-slick";
import { SliderWrapper } from "../../common/slider/Slider.styles";

const ShowCast = () => {
  const castData = useSelector(selectShowCast);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autplaySpeed: 6000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
  };

  return (
    <ShowCastWrapper className="detail-block show-cast">
      <h4 className="detail-block-title">Cast</h4>
      <SliderWrapper>
        {castData && (
          <Slider
            {...settings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
          >
            {castData?.map((cast) => {
              return (
                <div className="show-cast-item" key={cast?.person?.id}>
                  <div className="item-content">
                    <img
                      src={cast?.person?.image?.medium}
                      alt=""
                      className="object-fit-cover"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </SliderWrapper>
    </ShowCastWrapper>
  );
};

export default ShowCast;
