import {Button} from '@mui/material';
import {FormDialogBtnProps, FormDialogRef} from './form_dialog.type';
import {FieldValues} from 'react-hook-form';
import FormDialog from './form_dialog';
import {useRef} from 'react';

const FormDialogBtn = <F extends FieldValues, >({buttonContent, ...rest}: FormDialogBtnProps<F>) => {
  
  const formDialogRef = useRef<FormDialogRef>(null);

  const handleClickOpen = () => {
    formDialogRef.current?.onOpen();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonContent}
      </Button>
      <FormDialog
        {...rest}
        _ref={formDialogRef}
      />
    </>
  );
};

export default FormDialogBtn;
