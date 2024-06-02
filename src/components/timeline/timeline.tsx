import React, {useEffect, useRef, useState} from 'react';
import {Timeline, DataSet} from 'vis-timeline/Standalone';
import {mockGroup} from '@/mock';
import type {TimeLineProps, TimeLineProperty, TimeLineData} from './timeline.type';
import {useTimeLineListener} from '@/hooks';
import {useTranslation} from 'react-i18next';
import {createTimeLineGroup, createTimeLineOpts} from '@/utils';

const TimeLine: React.FC<TimeLineProps> = ({lng = 'zh-cn'}) => {
  const container = useRef<HTMLDivElement>(null);
  const [timeline, setTimeLine] = useState<Timeline | null>(null);
  const [data, setData] = useState<TimeLineData[]>([]);

  const {t} = useTranslation();

  useEffect(() => {
    if (!container.current) {
      return;
    }
    initTimeLine();
    return () => {
      timeline && timeline.destroy();
    };
  }, []);

  const initTimeLine = () => {
    if (!container.current) {
      return;
    }
    console.log('mockGroup is', mockGroup);
    const {groups, items} = createTimeLineGroup(mockGroup);
    const timelineItems = new DataSet(items); // todo: get the server data
    setData(items);
    const options = createTimeLineOpts({locale: lng});
    const timeline = new Timeline(container.current, timelineItems, groups, options);
    setTimeLine(timeline);
  };


  const handleSelect = (properties: TimeLineProperty) => {
    const {items} = properties;
    const selectId = items[0];
    const selectItem = data.find(v => v.id === selectId);
    console.log('select properties is', selectItem); // todo: get the server data
  };

  const handleRangeChanged = (properties: TimeLineProperty) => {
    const {start, end, byUser} = properties;
    console.log({
      start,
      end,
      byUser
    });
  };

  useTimeLineListener(timeline, 'select', handleSelect);
  useTimeLineListener(timeline, 'rangechanged', handleRangeChanged);


  return (
    <>
      <p>{t('hello_timeline')}</p>
      <p>{t('hello_palais')}</p>
      <div ref={container}></div>
    </>
  );
};

export default TimeLine;