const getAllPages = (countPages: number) =>
  Array.from({ length: countPages }, (_, i) => i + 1);

const getStartPages = (countPages: number) => [1, 2, 3, 4, '...', countPages];

const getEndPages = (countPages: number) => [
  1,
  '...',
  countPages - 3,
  countPages - 2,
  countPages - 1,
  countPages
];

const getMiddlePages = (curPage: number, countPages: number) => [
  1,
  '...',
  curPage - 1,
  curPage,
  curPage + 1,
  '...',
  countPages
];

export const getPages = (curPage: number, countPages: number) => {
  if (countPages < 11) {
    return getAllPages(countPages);
  }

  let pages = [];

  if (curPage < 4) {
    pages = getStartPages(countPages);
  } else if (countPages - curPage < 3) {
    pages = getEndPages(countPages);
  } else {
    pages = getMiddlePages(curPage, countPages);
  }

  return pages;
};
