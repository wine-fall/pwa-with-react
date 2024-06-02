import {TimeLineVO} from '@/components/timeline/timeline.type';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {TimelineOptions} from 'vis-timeline';

dayjs.extend(duration);

export const twentyHundredYears = dayjs.duration({years: 200}).asMilliseconds();
export const threeMonth = dayjs.duration({months: 3}).asMilliseconds();

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
    zoomMin: threeMonth,
    groupHeightMode: 'fixed', // group 定高
    height: 400,
    orientation: {
      axis: 'both',
      item: 'top', // 时间轴初始定位在顶部
    },
    start: '2019-03-03',
    ...input,
  };
};

export const createTimeLineGroup = (group: TimeLineVO[]) => {
  const groups = group.map(({id, content}) => ({id, content, order: id}));
  const items = [];
  for (const {itemList} of group) {
    for (const v of itemList) {
      items.push(v);
    }
  }
  return {groups, items};
};
