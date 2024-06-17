import {FormFieldItem} from '@/components/form_dialog/form_dialog.type';
import {TextField} from '@mui/material';
import {PostFormValues} from './post_dialog.type';

export const postDefalutFormValues: PostFormValues = {
  content: '',
  image: [],
};

export const postFormFields: FormFieldItem<PostFormValues>[] = [
  {
    name: 'content',
    renderWrapper: (errors) => ({field}) => (
      <TextField
        autoFocus
        margin="dense"
        label="Content"
        type={'text'}
        variant="standard"
        fullWidth
        error={!!errors.content}
        helperText={errors.content?.message || ''}
        {...field}
      />
    ),
  }
];
