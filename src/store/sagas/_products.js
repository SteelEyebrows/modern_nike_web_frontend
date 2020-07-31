
import {
    GET_PRODUCTS,
    REQUEST,
  } from "../constants";
import * as api from "../../lib/api";
import { productsAction } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";

export function* fetchProducts({ payload }) {
  try {
    const { data } = yield call(api.getProducts, payload);
    yield put(productsAction.productsSuccess(data));
}
  catch(error) {
    yield put(productsAction.productsFailure(error));
  }
}

export default function* watchDepartment() {
  yield takeEvery([GET_PRODUCTS[REQUEST]], fetchProducts);
}
