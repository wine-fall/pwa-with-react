import {Dialog, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {forwardRef, useImperativeHandle, useState} from 'react';
import {PostDialogRef} from './post_dialog.type';
import {FixedSizeList} from 'react-window';
import type {ListChildComponentProps} from 'react-window';

const PostDialog: ReturnType<typeof forwardRef<PostDialogRef>> = forwardRef<PostDialogRef>(function PostDialogWithRef(_props, ref) {
  const [open, setOpen] = useState<boolean>(true);
  
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
  }, [open]);

  const renderRow = (props: ListChildComponentProps) => {
    console.log(props); // todo
    return <div></div>;
  };
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Dialog>
  );
});

export default PostDialog;
