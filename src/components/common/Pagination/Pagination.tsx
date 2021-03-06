import React from "react";
import stl from './Pagination.module.css';

type PropsType = {
  totalCount: number
  pageSize: number
  currentPage: number
  onChangedPage: (n: number) => void
}
export const Pagination = ({totalCount, pageSize, currentPage, onChangedPage}: PropsType) => {
  const pageCounts = totalCount ? Math.ceil(totalCount / pageSize) : 1;
  const pages = [];
  const step = pageCounts > 200 ? 50 : 10;

  let pageLimit = 8; // even number
  let startPage = currentPage - pageLimit / 2;
  let endPage = currentPage + pageLimit / 2;

  if (startPage < 1) {
    startPage = 1;
    endPage = pageLimit + 1;
  }
  if (endPage > pageCounts) {
    endPage = pageCounts;
    startPage = pageCounts - pageLimit < 1 ? 1 : pageCounts - pageLimit;
  }
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const pageList = pages.map(n => {
    const onClickGetByPage = () => onChangedPage(n);

    return (
      <span
        key={n}
        className={currentPage === n ? stl.currentPage : stl.page}
        onClick={onClickGetByPage}>
        {n}
      </span>
    );
  })

  //Functions Buttons
  const firstPageHandler = () => onChangedPage(1);
  const lastPageHandler = () => onChangedPage(pageCounts);
  const upPageHandler = () => {
    (currentPage + step) > pageCounts
      ? onChangedPage(pageCounts)
      : onChangedPage(currentPage + step)
  };
  const downPageHandler = () => {
    (currentPage - step) < 0
      ? onChangedPage(1)
      : onChangedPage(currentPage - step)
  };

  //COMPLETE JSX
  return (
    <div className={stl.pagesWrapper}>

      {currentPage > (pageLimit / 2 + 1) ? <span className={stl.page} onClick={firstPageHandler}>1</span> : <></>}
      {currentPage > (pageLimit / 2 + 1) ? <span className={stl.page} onClick={downPageHandler}>{'...'}</span> : <></>}
      <div className={stl.pageList}>
        {pageList}
      </div>
      {currentPage < pageCounts - pageLimit / 2 ?
        <span className={stl.page} onClick={upPageHandler}>{'...'}</span> : <></>}
      {endPage === pageCounts ? <></> :
        <span className={stl.page} onClick={lastPageHandler}>{pageCounts}</span>}
    </div>
  );
}
