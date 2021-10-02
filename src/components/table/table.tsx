import React, { FC, useMemo, useCallback } from 'react';
import classNames from 'classnames';

import { getEntries } from '@utils';

import './table.scss';
import { TableProps } from './types';

export const Table: FC<TableProps> = ({ elements, onClick, redrawable }) => {
  const classes = classNames({
    table: !redrawable,
    table_redrawable: redrawable
  });

  const handleClick = useCallback(
    (index: number) => {
      if (onClick) onClick(index);
    },
    [onClick]
  );

  const headers = useMemo(() => {
    if (!elements.length) return null;

    return getEntries(elements[0]).reduce<JSX.Element[]>((arr, [key]) => {
      if (key !== 'id') {
        const header = (
          <th className='table__td' key={`table-${key}`}>
            <span>{key}</span>
          </th>
        ) as JSX.Element;
        arr.push(header);
      }
      return arr;
    }, []);
  }, [elements]);

  const rows = useMemo(() => {
    if (!elements.length) return null;
    return elements.map((element, index) => {
      const columns = getEntries(element).reduce<JSX.Element[]>(
        (arr, [key, value]) => {
          if (key !== 'id') {
            const column = (
              <td className='table__td' key={`table-${element.id}-${key}`}>
                <div className='table__td-head'>{key}</div>
                <div className='table__td-value'>{value}</div>
              </td>
            ) as JSX.Element;
            arr.push(column);
          }
          return arr;
        },
        []
      );
      return (
        <tr
          key={`table-${element.id}`}
          className='table__tr'
          onClick={() => handleClick(index)}
        >
          {columns}
        </tr>
      );
    });
  }, [elements, handleClick]);

  return (
    <table className={classes}>
      <thead className='table__head'>
        <tr>{headers}</tr>
      </thead>
      <tbody className='table__body'>{rows}</tbody>
    </table>
  );
};
