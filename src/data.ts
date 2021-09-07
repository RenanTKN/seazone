import { range } from "lodash";

import { TaskProps } from "./contexts/TasksContext";
import { getMonday } from "./helpers";

const initialDate = getMonday(new Date());

export const mockedData: TaskProps[] = [];

const names = [
  "Gabriela da Silva",
  "Pedro Paulo",
  "Júlio Oliveira",
  "Livia Santos",
  "Rebeca Cardoso",
  "Kai Correia",
];

const getRandomName = () => names[Math.floor(Math.random() * names.length)];
const getRandomBoolean = () => Math.random() < 0.5;
const getRandomId = () => {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

for (const n of range(50)) {
  mockedData.push({
    type: "checkin",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    // Deixando o dateOut aleatório para ter tags de cama quente apenas em agluns dias
    dateOut: new Date(
      new Date().setDate(
        initialDate.getDate() + (getRandomBoolean() ? 0 : 1) + n
      )
    ),
    time: "14:00",
    id: getRandomId(),
    name: getRandomName(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
  });
  mockedData.push({
    type: "limpeza",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    dateOut: new Date(new Date().setDate(initialDate.getDate() + n)),
    time: "12:00",
    id: getRandomId(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
  });
  mockedData.push({
    type: "checkout",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    dateOut: new Date(new Date().setDate(initialDate.getDate() + n)),
    time: "12:00",
    id: getRandomId(),
    name: getRandomName(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
  });
  mockedData.push({
    type: "checkin",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    dateOut: new Date(new Date().setDate(initialDate.getDate() + n)),
    time: "14:00",
    id: getRandomId(),
    name: getRandomName(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
    isConcluded: true,
  });
  mockedData.push({
    type: "limpeza",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    dateOut: new Date(new Date().setDate(initialDate.getDate() + n)),
    time: "12:00",
    id: getRandomId(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
    isConcluded: true,
  });
  mockedData.push({
    type: "checkout",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    dateOut: new Date(new Date().setDate(initialDate.getDate() + n)),
    time: "12:00",
    id: getRandomId(),
    name: getRandomName(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
    isConcluded: true,
  });
}
