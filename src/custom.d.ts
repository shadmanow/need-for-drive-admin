declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module '2gis-maps' {
  export interface DgMouseEvent {
    latlng: {
      lat: number;
      lng: number;
    };
  }

  export interface DgMapOptions {
    fullscreenControl: boolean;
    center: [number, number];
    zoom: number;
  }

  export interface DgMap {
    remove: () => void;
    off: (type?: string) => void;
    on: (type: string, fn: (event: DgMouseEvent) => void) => void;
    setView: (center: [number, number], zoom: number) => void;
  }

  export interface DgMarkerOptions {
    zIndexOffset: number;
  }

  export interface DgMarker {
    addTo: (dgMap: DgMap) => void;
    removeFrom: (dgMap: DgMap) => void;
  }

  export function map(element: HTMLElement, options: DgMapOptions): DgMap;

  export function marker(
    center: [number, number],
    dgMarkerOptions?: DgMarkerOptions
  ): DgMarker;
}

declare module '*.png';
declare module '*.jpg';

declare type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
