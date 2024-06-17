import React, {useImperativeHandle} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Controller, FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {FormDialogProps} from './form_dialog.type';
import {Box} from '@mui/material';

const FormDialog = <F extends FieldValues, >({
  defaultValues,
  fileds,
  dialogTitle,
  confirmTxt,
  cancelTxt,
  _ref,
  dialogProps
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

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<F> = (data) => {
    console.log('data submitted: ', data);
  };

  useImperativeHandle(_ref, () => {
    return {
      onOpen: (cb) => {
        cb && cb();
        reset();
        setOpen(true);
      }
    };
  }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit(onSubmit),
        sx: {
          width: '311px'
        }
      }}
      {...dialogProps}
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
  );
};

export default FormDialog;
