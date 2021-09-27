export interface ButtonProps {
  icon?: string;
  className?: string;
  variant?: 'outlined' | 'default';
  color?: 'primary' | 'light' | 'danger';
  value?: string;
  onClick?: () => void;
  disabled?: boolean;
}
