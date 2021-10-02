export interface PaginationProps {
  slice?: number;
  elements: any[];
  onSelect: (elements: any[]) => void;
}
