import React, { useEffect, useRef, useState } from 'react';
import {Timeline, DataSet} from 'vis-timeline/Standalone';
import type {TimelineOptions} from 'vis-timeline/Standalone';
import {mockData} from '@/mock';

export interface TimeLineProps {
  lang: string;
}

const TimeLine: React.FC<TimeLineProps> = ({lang = 'zh-cn'}) => {
  const container = useRef<HTMLDivElement>(null);
  const [timeline, setTimeLine] = useState<Timeline | null>(null);

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
    const items = new DataSet(mockData);
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

  return <div ref={container}>hellow TimeLine</div>;
};

export default TimeLine;