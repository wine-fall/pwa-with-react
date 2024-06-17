import {Dayjs} from 'dayjs';

export interface EventFormValues {
  title: string;
  start: Dayjs | null;
  end: Dayjs | null;
}
