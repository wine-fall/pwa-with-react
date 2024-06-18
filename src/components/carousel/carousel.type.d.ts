export interface ImageItem {
  label: string;
  imgPath: string;
}

export interface CarouselProps {
  imageList: ImageItem[];
}

export interface CarouselDialogRef {
  open: () => void;
}
