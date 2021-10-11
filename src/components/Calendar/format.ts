import { TaskType } from "../../contexts/TasksContext";

export const formatType = (type: TaskType) => {
  switch (type) {
    case "checkin":
      return "Check-in";
    case "checkout":
      return "Check-out";
    case "limpeza":
      return "Limpeza";
  }
};

const leadingZero = (n: number) => (n < 10 ? `0${n}` : n.toString());

export const formatDate = (date: Date) => {
  if (!date) return "";
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${leadingZero(day)}/${leadingZero(month)}/${year}`;
};
