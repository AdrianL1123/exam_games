import React from "react";

function Pagination(props) {
  const { currentPage, games, onPageChange } = props;
  return (
    <div className="pagination">
      {/* INSTRUCTION: Add a button to go to the previous page. Disable the button if the current page is the first page. */}
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous Page
      </button>
      {/* INSTRUCTION: Display the current page number */}
      <span>Page: {currentPage}</span>
      {/* INSTRUCTION: Add a button to go to the next page. Disable the button if there are no games. */}
      <button
        disabled={games.length === 0 ? true : false}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
