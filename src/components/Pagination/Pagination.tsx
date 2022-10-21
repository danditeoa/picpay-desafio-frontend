import classnames from 'classnames';
import React from 'react';
import { DOTS, usePagination } from './usePagination';
import Styles from './pagination.module.scss';
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon/ArrowLeftIcon';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon/ArroRightIcon';

type PaginationProps = {
  onPageChange: any,
  totalCount: any,
  siblingCount:number,
  currentPage: number,
  pageSize: number,
  className: string
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}: PaginationProps) => {


  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if(paginationRange) {
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
  }


  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={Styles.container}
    >
      {currentPage !== 1 && (
        <li
          className={Styles.arrow}
          onClick={onPrevious}
        >
        	<ArrowLeftIcon />
      </li>
      )}
      {paginationRange?.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="item dots">&#8230;</li>;
        }

        return (
          <li
            className={classnames(`${Styles.item}`, {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {currentPage !== lastPage && (
        <li
          className={Styles.arrow}
          onClick={onNext}
        >
          <ArrowRightIcon />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
