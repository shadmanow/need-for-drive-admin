export interface TextFieldProps {
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value: string | number;
  error?: boolean;
  onChange?: (change: { name: string; value: string }) => void;
}
