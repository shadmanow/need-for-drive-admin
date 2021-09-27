import React, { FC, useState, useRef, ChangeEvent } from 'react';

import './file-chooser.scss';
import { FileChooserProps } from './types';

export const FileChooser: FC<FileChooserProps> = ({
  onFileSelect,
  accept
}): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState('');
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputFileRef && inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      setSelectedFile(e.currentTarget.files[0].name);
      if (onFileSelect) {
        onFileSelect(e.currentTarget.files[0]);
      }
    }
  };

  return (
    <div className='file-chooser'>
      <input
        type='file'
        onChange={handleChange}
        ref={inputFileRef}
        accept={accept}
      />
      <div className='file-chooser__text'>
        {selectedFile || `Выберите файл...`}
      </div>
      <button
        type='button'
        className='file-chooser__button'
        onClick={handleClick}
      >
        Обзор
      </button>
    </div>
  );
};
