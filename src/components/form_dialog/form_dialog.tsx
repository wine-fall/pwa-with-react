import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {FormDialogProps} from './form_dialog.type';

const FormDialog = <F extends FieldValues,>({defaultValues}: FormDialogProps<F>) => {
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
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Controller
              name="firstName"
              control={control}
              render={({field}) => (
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  {...field}
                />
              )}
            />
            <Controller
              name="iceCreamType"
              control={control}
              render={({field}) => (
                <Select
                  {...field}
                  options={[
                    {value: "chocolate", label: "Chocolate"},
                    {value: "strawberry", label: "Strawberry"},
                    {value: "vanilla", label: "Vanilla"},
                  ]}
                />
              )}
            /> */}
            <input type="submit" />
          </form>
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
