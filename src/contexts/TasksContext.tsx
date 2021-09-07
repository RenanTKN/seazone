import { createContext, useState, ReactNode, useEffect } from "react";

import { mockedData } from "../data";
import { getMonday, getWeek, isSameDate } from "../helpers";

export type TaskType = "checkin" | "checkout" | "limpeza";

export interface TaskProps {
  type: TaskType;
  dateIn: Date;
  dateOut: Date;
  time: string;
  id: string;
  name?: string;
  isCheckinComplete: boolean;
  isDataComplete: boolean;
  isConcluded?: boolean;
}

interface TasksContextData {
  tasks: TaskProps[];
  date: Date;
  weekTasks: TaskProps[][];
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext({} as TasksContextData);

export const TasksProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState(mockedData);
  const [date, setDate] = useState(new Date());
  const [weekTasks, setWeekTasks] = useState<TaskProps[][]>([]);

  useEffect(() => {
    setTasks(mockedData);
  }, []);

  useEffect(() => {
    const week = getWeek(getMonday(date));
    const weekTasks: TaskProps[][] = [];
    for (const day of week) {
      const todayTasks = tasks.filter((task) => isSameDate(task.dateIn, day));
      weekTasks.push(todayTasks);
    }
    setWeekTasks(weekTasks);
  }, [tasks, date]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        date,
        weekTasks,
        setDate,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
