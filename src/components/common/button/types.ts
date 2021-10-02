export interface ButtonProps {
  variant?: 'outlined' | 'default';
  value?: string;
  onClick?: () => void;
  disabled?: boolean;
}
