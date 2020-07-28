
import {
    GET_DEPARTMENTS,
    REQUEST,
  } from "../constants";
import * as api from "../../lib/api";
import { departmentAction } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";

export function* fetchDepartment({ payload }) {
  try {
    const { data } = yield call(api.getDepartments, payload);
    yield put(departmentAction.departmentSuccess(data));
}
  catch(error) {
    yield put(departmentAction.departmentFailure(error));
  }
}

export default function* watchDepartment() {
  yield takeEvery([GET_DEPARTMENTS[REQUEST]], fetchDepartment);
}
