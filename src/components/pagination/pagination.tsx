import React, { FC, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { getPages } from './helpers';
import { PaginationProps } from './types';

import './pagination.scss';

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  countPages,
  onSelect
}): JSX.Element => {
  const [curPage, setCurPage] = useState<number>(currentPage);
  const [curPages, setCurPages] = useState<(number | string)[]>([]);

  const handleClick = (page: number | string, index: number) => {
    let newPage = page;
    if (page === '...') {
      newPage = index === 1 ? curPage - 2 : curPage + 2;
    }
    setCurPage(newPage as number);
    onSelect(newPage as number);
  };

  useEffect(() => {
    setCurPages(getPages(curPage, countPages));
  }, [curPage, countPages]);

  useEffect(() => setCurPage(currentPage), [currentPage]);

  return (
    <div className='pagination'>
      <span onClick={() => handleClick(1, 0)}>«</span>
      {curPages.map((page, index) => (
        <span
          key={nanoid()}
          className={page === curPage ? 'pagination__active' : ''}
          onClick={() => handleClick(page, index)}
        >
          {page}
        </span>
      ))}
      <span onClick={() => handleClick(countPages, 0)}>»</span>
    </div>
  );
};
