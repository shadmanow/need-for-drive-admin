import React, { FC, useState, useEffect, useRef, useCallback } from 'react';
import Dg, { DgMap, DgMouseEvent, DgMarker } from '2gis-maps';

import './map.scss';
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, MapProps } from './types';

export const Map: FC<MapProps> = ({ center, marker, onClick }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<DgMap | null>(null);
  const [, setCurMarker] = useState<DgMarker | null>();

  const handleMapClick = useCallback(
    (event: DgMouseEvent) => {
      const coords: [number, number] = [event.latlng.lat, event.latlng.lng];
      const newMarker = Dg.marker(coords);

      if (map) {
        setCurMarker((oldMarker) => {
          oldMarker?.removeFrom(map);
          return newMarker;
        });
        newMarker.addTo(map);
      }
      if (onClick) onClick(coords);
    },
    [map, onClick]
  );

  useEffect(() => () => map?.remove(), []);

  useEffect(() => {
    map?.off('click');
    map?.on('click', handleMapClick);
  }, [map]);

  useEffect(() => {
    if (map && marker) {
      const newMarker = Dg.marker(marker);
      setCurMarker((oldMarker) => {
        oldMarker?.removeFrom(map);
        return newMarker;
      });
      newMarker.addTo(map);
    }
  }, [marker]);

  useEffect(() => {
    if (map) {
      map.setView(center || DEFAULT_MAP_CENTER, 11);
      setCurMarker((oldMarker) => {
        oldMarker?.removeFrom(map);
        return null;
      });
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
