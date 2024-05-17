export interface TimeLineProps {
  lang: string;
}
  
export interface TimeLineProperty {
  items: string[];
}

export interface TimelineData {
  id: string;
  content: string;
  start: string;
  end?: string;
  type?: string;
}