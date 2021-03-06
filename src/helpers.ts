import { range } from "lodash";

const monthNames = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

export const getMonthName = (month: number) => monthNames[month];

export const weekDayNames = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
];

export const getWeekDayName = (weekDay: number) => weekDayNames[weekDay];

export const getMonday = (date = new Date()) => {
  const d = new Date(date);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  d.setHours(0, 0, 0, 0);
  return d;
};

export const getWeek = (date = new Date()) => {
  const monday = getMonday(date);
  const week = [monday];
  for (let i of range(1, 7)) {
    const nextDay = new Date(monday);
    nextDay.setDate(nextDay.getDate() + i);
    week.push(nextDay);
  }
  return week;
};

export const getNextWeek = (date = new Date()) =>
  new Date(date.setDate(date.getDate() + 7));

export const getPreviousWeek = (date = new Date()) =>
  new Date(date.setDate(date.getDate() - 7));

export const getDateWithoutTime = (date: Date) =>
  new Date(date.setHours(0, 0, 0, 0));

export const isSameDate = (d1: Date, d2: Date) =>
  getDateWithoutTime(d1).getTime() === getDateWithoutTime(d2).getTime();
