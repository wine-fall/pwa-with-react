export interface TimeLineProps {
  lng?: string;
}
  
export interface TimeLineProperty {
  items: string[];
  start: number;
  end: number;
  byUser: boolean;
}

export interface TimelineData {
  id: string;
  content: string;
  start: string;
  end?: string;
  type?: string;
}