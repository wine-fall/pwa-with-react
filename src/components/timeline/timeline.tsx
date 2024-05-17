import React, {useEffect, useRef, useState} from 'react';
import {Timeline, DataSet} from 'vis-timeline/Standalone';
import type {TimelineOptions} from 'vis-timeline/Standalone';
import {mockData} from '@/mock';
import type {TimeLineProps, TimeLineProperty, TimelineData} from '@/types';
import {useTimeLineListener} from '@/hooks';

const TimeLine: React.FC<TimeLineProps> = ({lang = 'zh-cn'}) => {
  const container = useRef<HTMLDivElement>(null);
  const [timeline, setTimeLine] = useState<Timeline | null>(null);
  const [data, setData] = useState<TimelineData[]>([]);

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
    const items = new DataSet(mockData); // todo: get the server data
    setData(mockData);
    const timeline = new Timeline(container.current, items, {});
    const options: TimelineOptions = {
      locales: {
        'zh-cn': {
          current: 'zh',
          time: 'zh-cn'
        }
      },
      locale: lang
    };
    timeline.setOptions(options);
    setTimeLine(timeline);
  };


  const handleSelect = (properties: TimeLineProperty) => {
    const {items} = properties;
    const selectId = items[0];
    const selectItem = data.find(v => v.id === selectId);
    console.log('select properties is', selectItem); // todo: get the server data
  };

  useTimeLineListener(timeline, 'select', handleSelect);


  return <div ref={container}>hellow TimeLine</div>;
};

export default TimeLine;