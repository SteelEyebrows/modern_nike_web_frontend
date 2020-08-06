
import {
    GET_DETAIL,
    REQUEST,
  } from "../constants";
import {Detail} from "../../lib/api";
import { detailAction } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";


export function* fetchDetail({ payload }) {
  try {
    const { data } = yield call(Detail.getDetail,"index.json");
    yield put(detailAction.detailSuccess(data[payload]));
}
  catch(error) {
    yield put(detailAction.detailFailure(error));
  }
}

export default function* watchDetail() {
  yield takeEvery([GET_DETAIL[REQUEST]], fetchDetail);
}
