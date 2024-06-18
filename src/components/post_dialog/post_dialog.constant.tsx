import {FormFieldItem} from '@/components/form_dialog/form_dialog.type';
import {TextField} from '@mui/material';
import {PostFormValues} from './post_dialog.type';
import ImageUploader from '@/components/image_uploader/image_uploader';

export const postDefalutFormValues: PostFormValues = {
  content: '',
  imageList: [],
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
        rows={8}
        multiline
        variant="standard"
        fullWidth
        error={!!errors.content}
        helperText={errors.content?.message || ''}
        {...field}
      />
    ),
  },
  {
    name: 'imageList',
    renderWrapper: () => () => (
      <ImageUploader />
    )
  }
];
