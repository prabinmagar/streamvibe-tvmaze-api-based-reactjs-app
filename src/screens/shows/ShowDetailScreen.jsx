import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectShowDetail, selectShowMetadata } from "../../redux/selectors/showsSelectors";
import { useEffect } from "react";
import { fetchSingleShow } from "../../redux/slices/showsSlice";
import { scrollToTop } from "../../utilities/scrollToTop";
import {
  ErrorMessage,
  FreeTrial,
  ShowMainData,
  ShowMetaData,
  ShowsBanner,
  Spinner,
} from "../../components";
import { Container } from "../../styles/global/default";
import { ShowDetailContent } from "./ShowDetailScreen.styles";

const ShowDetailScreen = () => {
  const { id: showId } = useParams();
  const dispatch = useDispatch();
  const showDetailData = useSelector(selectShowDetail);
  const isLoading = useSelector(
    (state) => state.shows.isLoading.fetchSingleShow
  );
  const isError = useSelector((state) => state.shows.isError.fetchSingleShow);
  const error = useSelector((state) => state.shows.error);
  const showMetaData = useSelector(selectShowMetadata);
  console.log(showMetaData);

  useEffect(() => scrollToTop(), []);

  useEffect(() => {
    dispatch(fetchSingleShow(showId));
  }, [dispatch, showId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="pg-show-detail">
      {showDetailData && <ShowsBanner showData={showDetailData} />}

      <Container>
        {
          showDetailData && (
            <ShowDetailContent>
              <ShowMainData />
              <ShowMetaData metaData = {showMetaData} />
            </ShowDetailContent>
          )
        }
      </Container>
      <FreeTrial />
    </div>
  );
};

export default ShowDetailScreen;
