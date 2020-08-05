import { combineReducers } from "redux";
import departmentReducer from "./department";
import adaptiveReducer from "./adaptive";
import awsReducer from './aws';
import productsReducer from './products';
import detailReducer from './detail';


export const rootReducer = combineReducers({
    departments: departmentReducer,
    adaptive: adaptiveReducer,
    aws:awsReducer,
    products:productsReducer,
    detail:detailReducer
  });

