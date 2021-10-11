import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { isSameDate } from "../helpers";
import { TaskType } from "./TasksContext";

interface SelectedTaskData {
  open: boolean;
  id: string;
  name?: string;
  type: TaskType;
  dateIn: Date;
  dateOut: Date;
  isCamaQuente: boolean;
  isCheckinComplete: boolean;
  setId: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<TaskType>>;
  setDateIn: Dispatch<SetStateAction<Date>>;
  setDateOut: Dispatch<SetStateAction<Date>>;
  setIsCheckinComplete: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const SelectedTaskContext = createContext({} as SelectedTaskData);

export const SelectedTaskProvider = ({ children }: TaskProviderProps) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("checkin" as TaskType);
  const [dateIn, setDateIn] = useState(new Date());
  const [dateOut, setDateOut] = useState(new Date());
  const [isCamaQuente, setIsCamaQuente] = useState(false);
  const [isCheckinComplete, setIsCheckinComplete] = useState(false);

  React.useEffect(() => {
    setIsCamaQuente(type === "checkin" && isSameDate(dateIn, dateOut));
  }, [type, dateIn, dateOut]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SelectedTaskContext.Provider
      value={{
        open,
        id,
        name,
        type,
        dateIn,
        dateOut,
        isCamaQuente,
        isCheckinComplete,
        setId,
        setName,
        setType,
        setDateIn,
        setDateOut,
        setIsCheckinComplete,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </SelectedTaskContext.Provider>
  );
};
