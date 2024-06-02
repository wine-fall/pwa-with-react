import {useEffect, useRef} from 'react';
import {UseTimeLineListenerFn, TimelineEventCb} from '@/types';
import {TimeLineProperty} from '@/components/timeline/timeline.type';

export const useTimeLineListener: UseTimeLineListenerFn = (timeline, event, cb) => {
  const ref = useRef<TimelineEventCb>(cb);
  const listened = useRef<boolean>(false);
  useEffect(() => {
    ref.current = cb;
  }, [cb]);
  const listener = (properties: TimeLineProperty) => {
    ref.current(properties);
  };
  if (timeline && !listened.current) {
    timeline.on(event, listener);
    listened.current = true;
  }
  return;
};
