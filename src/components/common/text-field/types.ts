export interface TextFieldProps {
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  error?: boolean;
  onChange: (value: string) => void;
}