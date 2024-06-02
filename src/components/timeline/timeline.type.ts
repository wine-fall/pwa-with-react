export interface TimeLineProps {
  lng?: string;
}
  
export interface TimeLineProperty {
  items: string[];
  start: number;
  end: number;
  byUser: boolean;
}

export interface TimeLineData {
  id: string;
  content: string;
  start: string;
  end?: string;
  type?: string;
}

export interface TimeLineVO {
  id: string | number;
  content: string;
  itemList: TimeLineData[]
}