export interface SelectProps {
  defaultValue: string;
  values: string[];
  onSelect: (value: string) => void;
}
