export enum ActionKind {
  SET_JOB = "SET_JOB",
  ADD_JOB = "ADD_JOB",
  DELETE_JOB = " DELETE_JOB",
}
export interface TodoAction {
  payload: string;
  type: ActionKind;
}
