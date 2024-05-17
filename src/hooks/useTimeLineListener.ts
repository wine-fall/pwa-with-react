import {useEffect, useRef} from 'react';
import {useTimeLineListenerFn, timelineEventCb, TimeLineProperty} from '@/types';

export const useTimeLineListener: useTimeLineListenerFn = (timeline, event, cb) => {
  const ref = useRef<timelineEventCb>(cb);
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
