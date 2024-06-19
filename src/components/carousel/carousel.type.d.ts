export interface ImageItem {
  label: string;
  imgPath: string;
}

export interface CarouselProps {
  imageList: ImageItem[];
}

export interface CarouselRef {
  handleStepChange: (step: number) => void;
}

export interface CarouselDialogProps extends CarouselProps {}

export interface CarouselDialogRef {
  open: (step?: number) => void;
}
