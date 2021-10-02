export const DEFAULT_MAP_CENTER: [number, number] = [54.98, 82.89];
export const DEFAULT_MAP_ZOOM: number = 11;

export interface MapProps {
  center?: [number, number];
  marker?: [number, number];
  onClick?: (latlng: [number, number]) => void;
}
