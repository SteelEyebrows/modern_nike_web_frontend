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

export const GET_DEPARTMENTS = createRequestTypes("GET_DEPARTMENTS");
export const SET_ADAPTIVE = createRequestTypes("SET_ADAPTIVE");
export const GET_AWS = createRequestTypes("GET_AWS");
export const GET_PRODUCTS = createRequestTypes("GET_PRODUCTS");

// {REQUEST: "GET_DEPARTMENTS_REQUEST", SUCCESS: "GET_DEPARTMENTS_SUCCESS", FAILURE: "GET_DEPARTMENTS_FAILURE"}