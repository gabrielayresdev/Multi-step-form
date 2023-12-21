import React from "react";

const usePagination = (numberOfPages: number) => {
  const [page, setPage] = React.useState(0);
  function goNext() {
    if (page + 1 < numberOfPages) setPage(page + 1);
  }

  function goPrev() {
    if (page - 1 >= 0) setPage(page - 1);
  }

  function goTo(num) {
    if (num >= 0 && num < numberOfPages) setPage(num);
  }

  return { page, goNext, goPrev, goTo };
};

export default usePagination;
