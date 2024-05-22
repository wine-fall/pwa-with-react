import {TimeLineVO} from '@/components/timeline/timeline.type';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {TimelineOptions} from 'vis-timeline';

dayjs.extend(duration);

export const twentyHundredYears = dayjs.duration({years: 200}).asMilliseconds();
export const oneWeek = dayjs.duration({weeks: 1}).asMilliseconds();

export const createTimeLineOpts = (input: TimelineOptions): TimelineOptions => {
  return {
    locales: {
      'zh-cn': {
        current: 'zh',
        time: 'zh-cn'
      }
    },
    zoomFriction: 5,
    zoomMax: twentyHundredYears,
    zoomMin: oneWeek,
    height: 400,
    ...input,
  };
};

export const createTimeLineGroup = (group: TimeLineVO[]) => {
  const groups = group.map(({id, content}) => ({id, content}));
  const items = [];
  for (const {itemList} of group) {
    for (const v of itemList) {
      items.push(v);
    }
  }
  return {groups, items};
};
