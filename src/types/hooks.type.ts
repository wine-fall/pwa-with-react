import {Timeline} from 'vis-timeline';

export type timelineEventCb = (properties: any) => void

export type useTimeLineListenerFn = (timeline: Timeline | null, event: string, cb: timelineEventCb) => void