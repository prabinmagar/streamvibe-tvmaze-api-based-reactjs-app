import { useRef, useState } from "react";
import { Images } from "../../../assets/images";
import { SearchBarWrapper } from "./SearchBar.styles";
import { Icons } from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchResults,
  resetSearchResults,
} from "../../../redux/slices/showsSlice";
import { selectSearchResults } from "../../../redux/selectors/showsSelectors";
import SearchList from "../SearchList/SearchList";
import NotDataFound from "../../common/NotDataFound/NotDataFound";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [hasValidQuery, setHasValidQuery] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const searchResultsData = useSelector(selectSearchResults);

  const isValidSearchQuery = (query) => {
    const regex = /^[\w\s\-',.?!&]+$/i;
    return regex.test(query);
  };

  const handleQuerySubmit = async (event) => {
    event.preventDefault();
    if (isValidSearchQuery(query)) {
      dispatch(resetSearchResults());
      setHasValidQuery(true);
      setSearchError("");
      dispatch(fetchSearchResults(query));
    } else if (query.trim().length === 0) {
      setSearchError("Please enter shows name.");
      setHasValidQuery(false);
    } else {
      setSearchError("Please enter valid show title or name.");
      setHasValidQuery(false);
    }
  };

  const handleQueryChange = (event) => setQuery(event.target.value);

  return (
    <SearchBarWrapper>
      <div className="searchbar-top flex items-center justify-center">
        <img
          src={Images.HomeBanner}
          alt=""
          className="obj-fit-cover searchbar-banner"
        />
        <form onSubmit={handleQuerySubmit}>
          <div className="search-box flex">
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for TV shows ..."
                className="text-lg font-semibold"
                onChange={handleQueryChange}
                ref={inputRef}
              />
            </div>
            <button type="submit" className="search-icon bg-transparent">
              <img src={Icons.Search} alt="" />
            </button>
            <span className="search-error-text">{searchError}</span>
          </div>
        </form>
      </div>
      <div className="searchbar-bottom">
        {hasValidQuery &&
          (searchResultsData && searchResultsData.length > 0 ? (
            <SearchList searchResultsData={searchResultsData} />
          ) : (
            <NotDataFound />
          ))}
      </div>
    </SearchBarWrapper>
  );
};

export default SearchBar;
