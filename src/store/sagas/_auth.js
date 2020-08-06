
import {
    POST_LOGIN,
    REQUEST,
  } from "../constants";
import {Auth} from "../../lib/api";
import { authAction } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";


export function* fetchLogin({ payload }) {
  try {
    const  data  = yield call(Auth.postLogin,payload);
    console.log(data);

    yield put(authAction.loginSuccess(data));
}
  catch(error) {
    alert("아이디와 비밀번호를 확인해주세요");
  }
}

export default function* watchLogin() {
  yield takeEvery([POST_LOGIN[REQUEST]], fetchLogin);
}
