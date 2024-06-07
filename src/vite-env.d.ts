/// <reference types="vite/client" />

import {Timeline} from "vis-timeline";

declare global {
  interface Window {timeline: Timeline}
}
