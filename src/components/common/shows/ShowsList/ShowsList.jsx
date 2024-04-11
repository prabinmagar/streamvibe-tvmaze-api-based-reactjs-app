import PropTypes from "prop-types";
import { PaginationWrapper, ShowsListWrapper } from "./ShowsList.styles";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Container } from "../../../../styles/global/default";
import { useState } from "react";
import ShowsItem from "../ShowsItem/ShowsItem";
import { DEFAULT_SHOWS } from "../../../../constant/showsConstants";
import { Icons } from "../../../../assets/icons";

const ShowsList = ({ showsData, showsTitle }) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 40;
  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = showsData.slice(indexOfFirstShow, indexOfLastShow);
  const totalPages = Math.ceil(showsData.length / showsPerPage);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(showsData.length / showsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNumberPage = (pageNum) => {
    if (pageNum) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <ShowsListWrapper>
      <SectionTitle title={showsTitle} />
      <Container>
        <div className="shows-list grid">
          {currentShows?.map((show) => (
            <ShowsItem key={show.id} itemData={show} itemType={DEFAULT_SHOWS} />
          ))}
        </div>
        <PaginationWrapper className="flex items-center justify-center">
          <button
            type="button"
            className="paginate-btn paginate-prev inline-flex items-center justify-center"
            disabled={currentPage === 1 ? "disabled" : ""}
            onClick={handlePrevPage}
          >
            <img src={Icons.ArrowLeft} alt="" />
          </button>
          <ul className="flex items-center">
            {Array.from({ length: totalPages }, (_, index) => {
              const tempPageNo = index + 1;
              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleNumberPage(tempPageNo)}
                    className={`paginate-btn paginate-num text-white text-lg font-medium ${
                      tempPageNo === currentPage ? "active" : ""
                    }`}
                  >
                    {tempPageNo}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="paginate-btn paginate-next inline-flex items-center justify-center"
            disabled={currentPage === totalPages ? "disabled" : ""}
            onClick={handleNextPage}
          >
            <img src={Icons.ArrowRight} alt="" />
          </button>
        </PaginationWrapper>
      </Container>
    </ShowsListWrapper>
  );
};

export default ShowsList;

ShowsList.propTypes = {
  showsData: PropTypes.array.isRequired,
  showsTitle: PropTypes.string.isRequired,
};
