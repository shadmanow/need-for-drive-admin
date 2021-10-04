export interface CheckboxProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  name?: string;
  onClick?: (checkbox: { name: string; value: boolean }) => void;
}
