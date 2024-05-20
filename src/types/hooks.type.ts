import {Timeline} from 'vis-timeline';

export type TimelineEventType = 'select' | 'rangechanged';

export type TimelineEventCb = (properties: any) => void

export type UseTimeLineListenerFn = (timeline: Timeline | null, event: TimelineEventType, cb: TimelineEventCb) => void