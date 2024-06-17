import {CSSProperties, MutableRefObject} from 'react';
import {FormDialogRef} from '@/components/form_dialog/form_dialog.type';

export interface PostCardProps {
  postCardFormRef: MutableRefObject<FormDialogRef | null>
  style?: CSSProperties;
}
