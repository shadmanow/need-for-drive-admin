export interface SelectProps {
  value: string;
  options: string[];
  disabled?: boolean;
  onSelect?: (select: { name: string; value: string }) => void;
  name?: string;
  label?: string;
}
