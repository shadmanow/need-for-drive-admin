export interface SelectProps {
  value: string;
  options: string[];
  onSelect?: (select: { name: string; value: string }) => void;
  name?: string;
  label?: string;
}
