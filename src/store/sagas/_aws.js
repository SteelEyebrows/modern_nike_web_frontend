
import {
    GET_AWS,
    REQUEST,
  } from "../constants";
import * as api from "../../lib/api";
import { awsAction } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";


export function* fetchAws({ payload }) {
  try {
    const  data  = yield call(api.getAws,payload);
    console.log(data);

}
  catch(error) {
    
  }
}

export default function* watchAws() {
  yield takeEvery([GET_AWS[REQUEST]], fetchAws);
}
