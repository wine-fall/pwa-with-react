import {forwardRef, useImperativeHandle, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import {CarouselDialogRef} from './carousel.type';

const CarouselDialog: ReturnType<typeof forwardRef<CarouselDialogRef>> = forwardRef(function FormDialogWithRef(_props, ref) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  useImperativeHandle(ref, () => {
    return {
      open: handleOpen
    };
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
    </Dialog>
  );
});

export default CarouselDialog;
