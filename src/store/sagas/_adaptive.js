
import {
    SET_ADAPTIVE,
    REQUEST,
  } from "../constants";
import * as api from "../../lib/api";
import { adaptiveAction } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";


export function* fetchAdaptive({ payload }) {
  try {
    const { data } = yield call(api.setAdatptive,"adaptive.json");
    yield put(adaptiveAction.adaptiveSuccess(data.images[payload]));
}
  catch(error) {
    yield put(adaptiveAction.adaptiveFailure(error));
  }
}

export default function* watchAdaptive() {
  yield takeEvery([SET_ADAPTIVE[REQUEST]], fetchAdaptive);
}
