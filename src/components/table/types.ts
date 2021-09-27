export interface TableColumn {
  [key: string]: JSX.Element | string | number;
}

export interface TableProps {
  elements: TableColumn[];
  onClick?: (rowIndex: number) => void;
}
