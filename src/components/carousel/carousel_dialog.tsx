import {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import {CarouselDialogProps, CarouselDialogRef, CarouselRef} from './carousel.type';
import Carousel from './carousel';

const CarouselDialog: ReturnType<typeof forwardRef<CarouselDialogRef, CarouselDialogProps>> = forwardRef(function FormDialogWithRef({imageList}: CarouselDialogProps, ref) {
  const [open, setOpen] = useState<boolean>(false);
  const carouselRef = useRef<CarouselRef>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (step = 0) => {
    carouselRef.current?.handleStepChange(step);
    setOpen(true);
  };
  
  useImperativeHandle(ref, () => {
    return {
      open: handleOpen
    };
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <Carousel imageList={imageList} ref={carouselRef} />
    </Dialog>
  );
});

export default CarouselDialog;
