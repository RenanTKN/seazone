import faker from "faker";
import { range } from "lodash";
import { formatHour } from "./components/Calendar/format";

import { TaskProps } from "./contexts/TasksContext";
import { getMonday } from "./helpers";

const initialDate = getMonday(new Date());

export const mockedData: TaskProps[] = [];

const getRandomName = () =>
  `${faker.name.firstName()} ${faker.name.lastName()}`;
const getRandomBoolean = () => faker.datatype.boolean();
const getRandomId = () => faker.datatype.uuid().toUpperCase().substring(0, 6);
const getRandomTime = () => formatHour(faker.datatype.datetime());

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
    time: getRandomTime(),
    id: getRandomId(),
    name: getRandomName(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
  });
  mockedData.push({
    type: "limpeza",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    dateOut: new Date(new Date().setDate(initialDate.getDate() + n)),
    time: getRandomTime(),
    id: getRandomId(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
  });
  mockedData.push({
    type: "checkout",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    dateOut: new Date(new Date().setDate(initialDate.getDate() + n)),
    time: getRandomTime(),
    id: getRandomId(),
    name: getRandomName(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
  });
  mockedData.push({
    type: "checkin",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    dateOut: new Date(new Date().setDate(initialDate.getDate() + n)),
    time: getRandomTime(),
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
    time: getRandomTime(),
    id: getRandomId(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
    isConcluded: true,
  });
  mockedData.push({
    type: "checkout",
    dateIn: new Date(new Date().setDate(initialDate.getDate() + n)),
    dateOut: new Date(new Date().setDate(initialDate.getDate() + n)),
    time: getRandomTime(),
    id: getRandomId(),
    name: getRandomName(),
    isCheckinComplete: getRandomBoolean(),
    isDataComplete: getRandomBoolean(),
    isConcluded: true,
  });
}
