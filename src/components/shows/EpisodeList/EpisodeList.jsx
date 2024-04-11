import PropTypes from "prop-types";
import { EpisodeListWrapper } from "./EpisodeList.styles";
import EpisodeItem from "../EpisodeItem/EpisodeItem";

const EpisodeList = ({ episodesData, seasonNo }) => {
  const filteredEpisodes = episodesData?.filter(
    (episode) => episode?.season === seasonNo
  );
  return (
    <EpisodeListWrapper className="grid">
      {filteredEpisodes?.map((episode) => {
        return (
          <EpisodeItem
            key={episode?.id}
            seasonNo={seasonNo}
            episodeData={episode}
          />
        );
      })}
    </EpisodeListWrapper>
  );
};

export default EpisodeList;

EpisodeList.propTypes = {
  episodesData: PropTypes.array.isRequired,
  seasonNo: PropTypes.number.isRequired,
};
