import { combineReducers } from "redux";

import adaptiveReducer from "./adaptive";
import awsReducer from './aws';
import productsReducer from './products';
import detailReducer from './detail';
import authReducer from './auth';
import cartReducer from './cart';


export const rootReducer = combineReducers({

    adaptive: adaptiveReducer,
    aws:awsReducer,
    products:productsReducer,
    detail:detailReducer,
    auth:authReducer,
    cart:cartReducer,
  });

