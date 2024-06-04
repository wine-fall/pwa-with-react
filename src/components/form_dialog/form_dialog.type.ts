import {ControllerProps, DefaultValues, FieldValues} from "react-hook-form";

export interface FormDialogProps<F extends FieldValues> {
  defaultValues: DefaultValues<F>;
  fileds: ControllerProps<F>[];
}
