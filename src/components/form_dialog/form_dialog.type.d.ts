import {DialogProps} from '@mui/material';
import React, {Ref, RefObject} from 'react';
import {ControllerProps, DefaultValues, FieldErrors, FieldValues} from "react-hook-form";

export type FormFieldItem<F extends FieldValues> = Omit<ControllerProps<F>, 'render'> & {
  renderWrapper: (errors: FieldErrors<F>) => ControllerProps<F>['render']
}

export interface FormDialogRef {
  onOpen: (cb?: () => void) => void;
}

export interface FormDialogProps<F extends FieldValues> {
  defaultValues: DefaultValues<F>;
  fileds: FormFieldItem<F>[];
  dialogTitle: string;
  _ref: Ref<FormDialogRef>;
  confirmTxt?: string;
  cancelTxt?: string;
  dialogProps?: Partial<DialogProps>
}

export interface FormDialogBtnProps<F extends FieldValues> extends Omit<FormDialogProps<F>, '_ref'> {
  buttonContent?: string;
  renderBtn?: (FormDialogRef: RefObject<FormDialogRef>) => React.ReactNode
}
