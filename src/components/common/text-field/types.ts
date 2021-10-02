export interface TextFieldProps {
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value: string | number;
  error?: boolean;
  onChange?: (value: string) => void;
}
