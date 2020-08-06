import {
    POST_LOGIN,
    POST_LOGOUT,
    REQUEST,
    SUCCESS
  } from "../../constants";

  
  const initialState = {
    user: {
      name: "",
      isAuthenticated: false,
      user: null,
    }
  };
  
  export default function(state = initialState, action){
    switch (action.type) {
      case POST_LOGIN[REQUEST]:
        return {
          ...state,
          isAuthenticated: false,
        };
      case POST_LOGIN[SUCCESS]:
        const {payload} =action;
        return {
          ...state,
          isAuthenticated: true,
          user:payload
        };
      case POST_LOGOUT[REQUEST]:
            return {
              ...state,
              isAuthenticated: false,
              user:{}
            };
      default:
        return state;
    }
  }
  