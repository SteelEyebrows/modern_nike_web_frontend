import { combineReducers } from "redux";
import departmentReducer from "./department";


export const rootReducer = combineReducers({
    departments: departmentReducer,
  });

