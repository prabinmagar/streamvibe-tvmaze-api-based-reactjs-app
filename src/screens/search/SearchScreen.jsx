import { useEffect } from "react";
import { SearchBar } from "../../components";
import { scrollToTop } from "../../utilities/scrollToTop";

const SearchScreen = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <div className="pg-search top-spacing-fix">
      <SearchBar />
    </div>
  );
};

export default SearchScreen;
