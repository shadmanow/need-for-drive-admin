import React, { FC, useState } from 'react';

import { ReactComponent as SearchIcon } from '@assets/images/svg/search.svg';
import TextField from '@components/common/text-field';

import './search.scss';

export const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  const handleChange = (change: { value: string }) => setValue(change.value);
  return (
    <div className='search'>
      <SearchIcon className='search__icon' />
      <TextField value={value} onChange={handleChange} placeholder='Поиск...' />
    </div>
  );
};
