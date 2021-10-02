export interface FileChooserProps {
  onFileSelect?: (file: File | File[]) => void;
  accept?: string;
}
