import React, { FC, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import './pagination.scss';
import { getPages } from './helpers';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  countPages,
  onSelect
}): JSX.Element => {
  const [curPage, setCurPage] = useState(currentPage);
  const [curPages, setCurPages] = useState<any[]>([]);

  const handleClick = (page: any, index: number) => {
    let newPage = page;
    if (page === '...') {
      newPage = index === 1 ? curPage - 2 : curPage + 2;
    }
    setCurPage(newPage);
    onSelect(newPage);
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
