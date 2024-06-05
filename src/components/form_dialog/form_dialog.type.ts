import {ControllerProps, DefaultValues, FieldErrors, FieldValues} from "react-hook-form";

export type FormFieldItem<F extends FieldValues> = Omit<ControllerProps<F>, 'render'> & {
  renderWrapper: (errors: FieldErrors<F>) => ControllerProps<F>['render']
}

export interface FormDialogProps<F extends FieldValues> {
  defaultValues: DefaultValues<F>;
  fileds: FormFieldItem<F>[];
  buttonContent: string;
  dialogTitle: string;
  confirmTxt?: string;
  cancelTxt?: string;
}
