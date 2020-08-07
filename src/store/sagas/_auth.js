
import {
    POST_LOGIN,
    POST_REGISTER,
    REQUEST,
  } from "../constants";
import {Auth} from "../../lib/api";
import { authAction } from "../actions";
import { call, put, all,fork,takeLatest } from "redux-saga/effects";


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


export function* fetchRegister({ payload }) {
    try {
      const  data  = yield call(Auth.postRegister,payload);
      yield put(authAction.registerSuccess(data));
  }
    catch(error) {
      alert(error);
    }
  }


export function* watchFetchLogin() {
    yield takeLatest([POST_LOGIN[REQUEST]], fetchLogin);
}
export function* watchFetchRegister() {
    yield takeLatest([POST_REGISTER[REQUEST]], fetchRegister);
}


export default function*()  {
    yield all([
        fork(watchFetchLogin),
        fork(watchFetchRegister),
      ]);
}
