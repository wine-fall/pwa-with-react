import {EventFormValues} from '@/views/home/home.type';
import {TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {t} from 'i18next';
import {FormFieldItem} from '@/components/form_dialog/form_dialog.type';

export const eventDefalutFormValues: EventFormValues = {
  title: '',
  start: null,
  end: null
};

export const eventFormFields: FormFieldItem<EventFormValues>[] = [
  {
    name: 'title',
    renderWrapper: (errors) => ({field}) => (
      <TextField
        autoFocus
        margin="dense"
        label="Title"
        type={'text'}
        variant="standard"
        fullWidth
        helperText={errors.title?.message || ''}
        {...field}
      />
    ),
    rules: {
      required: true,
    }
  },
  {
    name: 'start',
    renderWrapper: (errors) => ({field}) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Start Time" {...field}
          slotProps={{
            textField: {
              helperText: errors.start?.message || '',
            },
          }}
        />
      </LocalizationProvider>
    ),
    rules: {
      validate: (value) => {
        if (!value || !dayjs.isDayjs(value)) {
          return t('home_start_err1', 'start time is required and should be a Dayjs instance');
        }
        return true;
      }
    }
  },
  {
    name: 'end',
    renderWrapper: (errors) => ({field}) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="End Time" {...field}
          slotProps={{
            textField: {
              helperText: errors.end?.message || '',
            },
          }}
        />
      </LocalizationProvider>
    ),
    rules: {
      validate: (value, {start}) => {
        if (value && dayjs.isDayjs(value) && dayjs.isDayjs(start) && value.isBefore(start)) {
          return t('home_end_err1', 'end time must after start time');
        }
        return true;
      }
    }
  },
];
