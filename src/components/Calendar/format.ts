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
