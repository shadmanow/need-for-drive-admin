import React, { FC, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import './paginator.scss';
import { DEFAULT_SLICE, DEFAULT_PAGE } from './constants';
import { getCountPages, getPages, sliceElements } from './helpers';
import { PaginationProps } from './types';

export const Paginator: FC<PaginationProps> = ({
  elements,
  onSelect
}): JSX.Element => {
  const [countPages, setCountPages] = useState<number>(() =>
    getCountPages(elements)
  );
  const [curPage, setCurPage] = useState<number>(DEFAULT_PAGE);
  const [curPages, setCurPages] = useState<(number | string)[]>([]);

  const handleClick = (page: number | string, index: number) => {
    let newPage = page;
    if (page === '...') {
      newPage = index === 1 ? curPage - 2 : curPage + 2;
    }
    setCurPage(newPage as number);
    onSelect(sliceElements(elements, newPage as number, DEFAULT_SLICE));
  };

  useEffect(() => {
    const newCountPages = getCountPages(elements);
    setCountPages(newCountPages);
    setCurPages(getPages(curPage, newCountPages));
    setCurPage(DEFAULT_PAGE);
    onSelect(sliceElements(elements, curPage, DEFAULT_SLICE));
  }, [elements]);

  return (
    <div className='paginator'>
      <span onClick={() => handleClick(1, 0)}>«</span>
      {curPages.map((page, index) => (
        <span
          key={nanoid()}
          className={page === curPage ? 'paginator__active' : ''}
          onClick={() => handleClick(page, index)}
        >
          {page}
        </span>
      ))}
      <span onClick={() => handleClick(countPages, 0)}>»</span>
    </div>
  );
};
