export interface PaginationProps {
  currentPage: number;
  countPages: number;
  onSelect: (page: number) => void;
}
