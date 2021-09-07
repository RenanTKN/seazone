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
  isLoading: boolean;
  weekTasks: TaskProps[][];
  showCheckIn: boolean;
  showCheckOut: boolean;
  showLimpeza: boolean;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCheckIn: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCheckOut: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLimpeza: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext({} as TasksContextData);

export const TasksProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState(mockedData);
  const [date, setDate] = useState(new Date());
  const [weekTasks, setWeekTasks] = useState<TaskProps[][]>([]);
  const [showCheckIn, setShowCheckIn] = useState(true);
  const [showCheckOut, setShowCheckOut] = useState(true);
  const [showLimpeza, setShowLimpeza] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTasks(mockedData);
  }, []);

  useEffect(() => {
    const week = getWeek(getMonday(date));
    const weekTasks: TaskProps[][] = [];

    const typesToShow: TaskType[] = [];
    showCheckIn && typesToShow.push("checkin");
    showCheckOut && typesToShow.push("checkout");
    showLimpeza && typesToShow.push("limpeza");

    for (const day of week) {
      const todayTasks = tasks.filter(
        (task) =>
          isSameDate(task.dateIn, day) && typesToShow.includes(task.type)
      );
      weekTasks.push(todayTasks);
    }
    setWeekTasks(weekTasks);
    setIsLoading(false);
  }, [tasks, date, showCheckIn, showCheckOut, showLimpeza]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        date,
        isLoading,
        weekTasks,
        showCheckIn,
        showCheckOut,
        showLimpeza,
        setDate,
        setIsLoading,
        setShowCheckIn,
        setShowCheckOut,
        setShowLimpeza,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
