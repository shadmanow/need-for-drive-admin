import React, { FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import noImage from '@assets/images/no-image.png';

import { useAppSelector } from '@store/hooks';
import { Car } from '@store/cars/types';
import { selectCurrentCar } from '@store/selectors';
import { setCurrentCar } from '@store/current-car/thunks';

import { Panel } from '@components/wrapper';
import FileChooser from '@components/file-chooser';
import ProgressBar from '@components/progress-bar';

import './car-card.scss';

export const CarCard: FC = () => {
  const dispatch = useDispatch();
  const currentCar = useAppSelector(selectCurrentCar);

  const [img, setImg] = useState<string>(
    currentCar?.thumbnail?.path || noImage
  );

  const handleFileSelect = (file: File) => {
    setImg(URL.createObjectURL(file));
    dispatch(setCurrentCar({ ...currentCar, imgFile: file } as Car));
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      setCurrentCar({ ...currentCar, description: e.target.value } as Car)
    );
  };

  return (
    <Panel className='car-card'>
      <img className='car-card__image' src={img} alt={currentCar?.name} />
      <span className='car-card__name'>{currentCar?.name}</span>
      {currentCar?.categoryId && (
        <span className='car-card__category'>
          {currentCar?.categoryId?.name}
        </span>
      )}
      <FileChooser
        accept='image/png, image/jpeg'
        onFileSelect={handleFileSelect}
      />
      <ProgressBar progress={currentCar?.tank} />
      <div className='car-card__description'>
        <h2>Описание</h2>
        <textarea
          value={currentCar?.description || ''}
          onChange={handleDescriptionChange}
        />
      </div>
    </Panel>
  );
};
