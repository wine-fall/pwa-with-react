import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Controller, FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {FormDialogProps} from './form_dialog.type';

const FormDialog = <F extends FieldValues,>({defaultValues, fileds}: FormDialogProps<F>) => {
  const {control, handleSubmit} = useForm<F>({
    defaultValues,
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
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
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit(onSubmit),
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          {fileds.map(({name, render}) => (
            <div
              key={name}
            >
              <Controller
                name={name}
                render={render}
                control={control}
              />
              <br />
              <br />
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
