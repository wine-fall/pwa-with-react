import {TimeLineData} from "@/components/timeline/timeline.type";

export const mockData: TimeLineData[] = [
  {id: '1', content: "item 1", start: "2014-04-20"},
  {id: '2', content: "item 2", start: "2014-04-14"},
  {id: '3', content: "item 3", start: "2014-04-18"},
  {id: '4', content: "item 4", start: "2014-04-16", end: "2014-04-19"},
  {id: '5', content: "item 5", start: "2014-04-25"},
  {id: '6', content: "item 6", start: "2014-04-27", type: "point"}
];

const createItems = (init: number, range: number, group: string, tpl: string) => {
  const items = [];
  for (let i = 0; i < range; i++) {
    items.push({
      id: (init + i).toString(),
      content: 'item' + (init + i).toString(),
      group,
      start: `${tpl}${(i + 1).toString().padStart(2, '0')}`
    });
  }
  return items;
};

const countries = [
  "usa",
  "canada",
  "uk",
  "australia",
  "germany",
  "france",
  "japan",
  "china",
  "india",
  "brazil"
];

const createGroupData = () => {
  const group = [];
  const range = 6;
  for (let i = 0; i < countries.length; i++) {
    group.push({
      id: i,
      content: countries[i],
      itemList: createItems(i * range, range, i.toString(), `202${i}-03-`),
    });
  }
  return group;
};

export const mockGroup = createGroupData();
