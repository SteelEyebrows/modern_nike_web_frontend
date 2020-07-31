import { combineReducers } from "redux";
import departmentReducer from "./department";
import adaptiveReducer from "./adaptive";
import awsReducer from './aws';
import productsReducer from './products';

export const rootReducer = combineReducers({
    departments: departmentReducer,
    adaptive: adaptiveReducer,
    aws:awsReducer,
    products:productsReducer
  });

