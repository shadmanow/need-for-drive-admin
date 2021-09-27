import React, { FC } from 'react';

import { getEntries } from '@utils';

import './table.scss';
import { TableProps } from './types';

export const Table: FC<TableProps> = ({ elements, onClick }) => {
  const handleClick = (rowIndex: number) => {
    if (onClick) onClick(rowIndex);
  };
  return (
    <table className='table'>
      <thead className='table__headers'>
        <tr>
          {elements?.length &&
            getEntries(elements[0]).map(([key]) => (
              <th className='table__column'>
                <span>{key}</span>
              </th>
            ))}
        </tr>
      </thead>
      <tbody className='table__body'>
        {elements?.map((element, index) => (
          <tr className='table__row' onClick={() => handleClick(index)}>
            {getEntries(element).map(([key, value]) => (
              <td className='table__column'>
                <div className='table__column-header'>{key}</div>
                <div className='table__column-value'>{value}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
