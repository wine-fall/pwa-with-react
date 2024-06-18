import {Box, Dialog, DialogContent, IconButton, Slide, Toolbar} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {RefObject, forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {PostDialogRef, PostFormValues} from './post_dialog.type';
import {FixedSizeList} from 'react-window';
import type {ListChildComponentProps} from 'react-window';
import {FormDialogBtn, PostCard} from '@/components';
import AutoSizer from 'react-virtualized-auto-sizer';
import {FormDialogRef} from '@/components/form_dialog/form_dialog.type';
import {postDefalutFormValues, postFormFields} from './post_dialog.constant';
import AddIcon from '@mui/icons-material/Add';
import {useTranslation} from 'react-i18next';
import {TransitionProps} from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return (
    <Slide direction="up" ref={ref}
      {...props} />
  );
});

const PostDialog: ReturnType<typeof forwardRef<PostDialogRef>> = forwardRef<PostDialogRef>(function PostDialogWithRef(_props, ref) {
  const {t} = useTranslation();
  
  const [open, setOpen] = useState<boolean>(true);

  const formRef = useRef<FormDialogRef | null>(null);
  
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
    return (
      <PostCard
        key={index}
        style={style}
        postCardFormRef={formRef}
      />
    );
  };

  const handleCreatePost = (formDialogRef: RefObject<FormDialogRef>) => () => {
    formDialogRef.current?.onOpen();
  };

  const onRenderBtn = (formDialogRef: RefObject<FormDialogRef>) => {
    return (
      <IconButton
        size={'large'}
        className={'absolute right-3 bottom-6 bg-blue-400 shadow-xl'}
        onClick={handleCreatePost(formDialogRef)}
      >
        <AddIcon />
      </IconButton>
    );
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
                itemCount={10}
                itemSize={319 + 56}
                width={width}
              >
                {renderRow}
              </FixedSizeList>
            )}
          </AutoSizer>
        </Box>
      </DialogContent>
      <FormDialogBtn<PostFormValues>
        defaultValues={postDefalutFormValues}
        fileds={postFormFields}
        dialogTitle={t('post_dialog_title', 'Post One!')}
        renderBtn={onRenderBtn}
        confirmTxt={'post'}
        dialogProps={{
          fullScreen: true,
          TransitionComponent: Transition
        }}
      >
      </FormDialogBtn>
    </Dialog>
  );
});

export default PostDialog;
