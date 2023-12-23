import React from "react";

export interface UsePaginationInterface {
  page: number;
  goNext: () => void;
  goPrev: () => void;
  goTo: (num: number) => void;
}

const usePagination = (numberOfPages: number) => {
  const [page, setPage] = React.useState(0);
  function goNext() {
    if (page + 1 < numberOfPages) setPage(page + 1);
  }

  function goPrev() {
    if (page - 1 >= 0) setPage(page - 1);
  }

  function goTo(num: number) {
    if (num >= 0 && num < numberOfPages) setPage(num);
  }

  return { page, goNext, goPrev, goTo };
};

export default usePagination;
