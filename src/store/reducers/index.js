import { combineReducers } from "redux";
import departmentReducer from "./department";
import adaptiveReducer from "./adaptive";


export const rootReducer = combineReducers({
    departments: departmentReducer,
    adaptive: adaptiveReducer,
  });

