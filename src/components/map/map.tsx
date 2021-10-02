import React, { FC, useState, useEffect, useRef } from 'react';
import Dg, { DgMap, DgMouseEvent } from '2gis-maps';

import './map.scss';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, MapProps } from './types';

export const Map: FC<MapProps> = ({ center, onClick }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<DgMap | null>(null);

  const handleMapClick = (event: DgMouseEvent) => {
    if (onClick) {
      onClick([event.latlng.lat, event.latlng.lng]);
    }
  };

  useEffect(() => () => map?.remove(), []);

  useEffect(() => {
    map?.off('click');
    map?.on('click', handleMapClick);
  }, [map, onClick]);

  useEffect(() => {
    if (map) {
      map.setView(center || DEFAULT_MAP_CENTER, 11);
    } else if (mapRef?.current) {
      const newMap = Dg.map(mapRef.current, {
        fullscreenControl: false,
        zoom: DEFAULT_MAP_ZOOM,
        center: center || DEFAULT_MAP_CENTER
      });
      setMap(newMap);
    }
  }, [center]);

  return (
    <div className='map'>
      <div className='map__content' ref={mapRef} />
    </div>
  );
};
