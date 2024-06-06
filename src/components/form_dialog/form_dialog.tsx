import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Controller, FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {FormDialogProps} from './form_dialog.type';
import {Box} from '@mui/material';

const FormDialog = <F extends FieldValues,>({
  defaultValues,
  fileds,
  buttonContent,
  dialogTitle,
  confirmTxt,
  cancelTxt
}: FormDialogProps<F>) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<F>({
    defaultValues,
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    reset();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<F> = (data) => {
    console.log('data submitted: ', data);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonContent}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit(onSubmit),
          sx:{
            width: '311px'
          }
        }}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          {fileds.map(({name, renderWrapper, rules}, idx) => (
            <Box
              key={name}
            >
              <Controller
                name={name}
                render={renderWrapper(errors)}
                control={control}
                rules={rules}
              />
              <br />
              {idx === fileds.length - 1 ? null : <br />}
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{cancelTxt || 'Cancel'}</Button>
          <Button type="submit">{confirmTxt || 'Subscribe'}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
