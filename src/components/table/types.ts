import { ReactNode } from 'react';

export interface TableColumn {
  id: any;
  [key: string]: ReactNode;
}

export interface TableProps {
  elements: TableColumn[];
  onClick: (rowIndex: number) => void;
  redrawable?: boolean;
}
