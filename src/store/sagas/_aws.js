
import {
    GET_AWS,
    POST_AWS,
    REQUEST,
  } from "../constants";
import {Aws} from "../../lib/api";
import { awsAction } from "../actions";
import { call, put,all,fork, takeLatest } from "redux-saga/effects";


export function* fetchAws({ payload }) {
  try {
    const  data  = yield call(Aws.getAws,payload);
    yield put(awsAction.awsSuccess(data));
}
  catch(error) {
    
  }
}

export function* postAws({ payload }) {
  try {
    const  data  = yield call(Aws.csWriting,payload);
    alert(data);
}
  catch(error) {
    
  }
}

export function* watchFetchAws() {
  yield takeLatest([GET_AWS[REQUEST]], fetchAws);
}
export function* watchPostAws() {
  yield takeLatest([POST_AWS[REQUEST]], postAws);
}

export default function*()  {
  yield all([
      fork(watchFetchAws),
      fork(watchPostAws),
    ]);
}