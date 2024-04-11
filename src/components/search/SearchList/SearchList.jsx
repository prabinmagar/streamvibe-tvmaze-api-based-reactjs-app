import ShowsList from "../../common/shows/ShowsList/ShowsList";
import { SearchBarWrapper } from "../SearchBar/SearchBar.styles";
import PropTypes from "prop-types";

const SearchList = ({ searchResultsData }) => {
  const showsData = searchResultsData.map((singleResult) => singleResult.show);
  return (
    <SearchBarWrapper>
      <ShowsList showsData={showsData} showsTitle={"Search Results"} />
    </SearchBarWrapper>
  );
};

export default SearchList;

SearchList.propTypes = {
  searchResultsData: PropTypes.array.isRequired,
};
