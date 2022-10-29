import { TodoAction, ActionKind } from "./Actions";
// 1. Init State
export interface TodoState {
  jobs: string[];
  job: string;
}
export const initState: TodoState = {
  jobs: [],
  job: "",
};
export const reducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case ActionKind.SET_JOB:
      return {
        job: action.payload,
        jobs: [...state.jobs],
      };
    case ActionKind.ADD_JOB:
      if (action.payload) {
        return {
          job: "",
          jobs: [...state.jobs, action.payload],
        };
      }
      return {
        job: "",
        jobs: [...state.jobs],
      };
    case ActionKind.DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(Number(action.payload), 1);
      return {
        job: "",
        jobs: newJobs,
      };
    default:
      return state;
  }
};
