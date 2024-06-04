import {EventFormValues} from '@/views/home/home.type';
import {TextField} from '@mui/material';
import {ControllerProps} from 'react-hook-form';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

export const eventDefalutFormValues: EventFormValues = {
  title: '',
  start: null,
  end: null
};

export const eventFormFields: ControllerProps<EventFormValues>[] = [
  {
    name: 'title',
    render: ({field}) => (
      <TextField
        autoFocus
        margin="dense"
        label="Title"
        type={'text'}
        variant="standard"
        fullWidth
        {...field}
      />
    )
  },
  {
    name: 'start',
    render: ({field}) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Start Time" {...field}/>
      </LocalizationProvider>
    )
  },
  {
    name: 'end',
    render: ({field}) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="End Time" {...field}/>
      </LocalizationProvider>
    )
  },
];
