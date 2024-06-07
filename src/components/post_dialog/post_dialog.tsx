import {Box, Dialog, DialogContent, IconButton, Toolbar} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {forwardRef, useImperativeHandle, useState} from 'react';
import {PostDialogRef} from './post_dialog.type';
import {FixedSizeList} from 'react-window';
import type {ListChildComponentProps} from 'react-window';
import {PostCard} from '@/components';
import AutoSizer from 'react-virtualized-auto-sizer';

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

  const renderRow = (listProps: ListChildComponentProps) => {
    const {index, style} = listProps;
    return <PostCard key={index} style={style} />;
  };
  
  return (
    <Dialog open={open} fullScreen>
      <Toolbar>
        <Box sx={{flex: 1}}></Box>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          edge='end'
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <DialogContent sx={{pt: 0}}>
        <Box
          sx={{
            height: 'calc(100vh - 20px - 20px - 56px)',
          }}
        >
          <AutoSizer>
            {({height, width}) => (
              <FixedSizeList
                className="List"
                height={height}
                itemCount={1000}
                itemSize={319 + 56}
                width={width}
              >
                {renderRow}
              </FixedSizeList>
            )}
          </AutoSizer>
        </Box>
      </DialogContent>
    </Dialog>
  );
});

export default PostDialog;
