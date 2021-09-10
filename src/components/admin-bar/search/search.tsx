import React, { FC, useState } from 'react';

import './search.scss';
import SearchImage from '@assets/images/svg/search.svg';
import TextField from '@components/common/text-field';

export const Search: FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className='search'>
      <SearchImage className='search__image' />
      <TextField
        value={value}
        onChange={(text) => setValue(text)}
        placeholder='Поиск...'
      />
    </div>
  );
};
