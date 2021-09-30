import React, { FC, useState, useMemo, useEffect } from 'react';
import { nanoid } from 'nanoid';

import './paginator.scss';
import { DEFAULT_SLICE, DEFAULT_PAGE, DEFAULT_PAGE_COUNT } from './constants';
import { getCountPages, getPages, sliceElements } from './helpers';
import { PaginationProps } from './types';

export const Paginator: FC<PaginationProps> = ({
  elements,
  onSelect,
  slice
}): JSX.Element => {
  const [pageCount, setPageCount] = useState<number>(DEFAULT_PAGE_COUNT);
  const [page, setPage] = useState<number>(DEFAULT_PAGE);
  const [pages, setPages] = useState<(number | string)[]>([]);
  const sliceValue = useMemo(() => slice || DEFAULT_SLICE, [slice]);

  const handleClick = (curPage: number | string, index: number) => {
    let newPage = curPage;
    if (curPage === '...') {
      newPage = index === 1 ? page - 2 : page + 2;
    }
    setPage(newPage as number);
    setPages(getPages(newPage as number, pageCount));
    onSelect(sliceElements(elements, newPage as number, sliceValue));
  };

  useEffect(() => {
    const newPageCount = getCountPages(elements, sliceValue);
    setPageCount(newPageCount);
    setPages(getPages(page, newPageCount));
    setPage(DEFAULT_PAGE);
    onSelect(sliceElements(elements, DEFAULT_PAGE, sliceValue));
  }, [elements]);

  return (
    <div className='paginator'>
      <div className='paginator__wrapper'>
        <span onClick={() => handleClick(1, 0)}>«</span>
        {pages.map((curPage, index) => (
          <span
            key={nanoid()}
            className={curPage === page ? 'paginator__current-page' : ''}
            onClick={() => handleClick(curPage, index)}
          >
            {curPage}
          </span>
        ))}
        <span onClick={() => handleClick(pageCount, 0)}>»</span>
      </div>
    </div>
  );
};
