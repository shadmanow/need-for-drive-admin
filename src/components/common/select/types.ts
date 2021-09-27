export interface SelectProps {
  defaultValue: string;
  values: string[];
  onSelect?: (select: { name: string; value: string }) => void;
  name?: string;
  label?: string;
}
