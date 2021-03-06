
import {
    GET_ADAPTIVE,
    REQUEST,
  } from "../constants";
import {Adatptive} from "../../lib/api";
import { adaptiveAction } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";


export function* fetchAdaptive({ payload }) {
  try {
    const { data } = yield call(Adatptive.getAdatptive,"index.json");
    yield put(adaptiveAction.adaptiveSuccess(data.images[payload]));
}
  catch(error) {
    yield put(adaptiveAction.adaptiveFailure(error));
  }
}

export default function* watchAdaptive() {
  yield takeEvery([GET_ADAPTIVE[REQUEST]], fetchAdaptive);
}
