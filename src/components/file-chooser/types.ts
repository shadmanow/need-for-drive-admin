export interface FileChooserProps {
  onFileSelect?: (file: File) => void;
  accept?: string;
}
