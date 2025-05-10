import {TaskZustand} from '../Enums/TaskboardEnums';

export interface ITask {
  id: number;
  data: ITaskData;
}

export interface ITaskData {
  title: string;
  mitarbeiter?: string;
  zustand: TaskZustand;
}
