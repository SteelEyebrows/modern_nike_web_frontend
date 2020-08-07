export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";


function createRequestTypes(base){
    return [REQUEST,SUCCESS,FAILURE].reduce(
        (acc,type)=>{
            acc[type] = `${base}_${type}`;
            return acc;
        },{}
    )
}

export const GET_ADAPTIVE = createRequestTypes("GET_ADAPTIVE");
export const GET_AWS = createRequestTypes("GET_AWS");
export const GET_PRODUCTS = createRequestTypes("GET_PRODUCTS");
export const GET_DETAIL = createRequestTypes("GET_DETAIL");

export const POST_LOGIN = createRequestTypes("POST_LOGIN");
export const POST_LOGOUT = createRequestTypes("POST_LOGOUT");
export const POST_REGISTER = createRequestTypes("POST_REGISTER");
// {REQUEST: "GET_DEPARTMENTS_REQUEST", SUCCESS: "GET_DEPARTMENTS_SUCCESS", FAILURE: "GET_DEPARTMENTS_FAILURE"}