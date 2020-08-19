
import {
    ADD_CART,
    DELETE_CART,
    REQUEST,
  } from "../constants";
import { cartAction } from "../actions";
import { call, put,all,fork, takeLatest } from "redux-saga/effects";
import storage from '../../lib/storage';


export function* fetchAddCart({ payload }) {
  try {
    const byfar = storage.get("CART")===null?[]:storage.get("CART");
    byfar.push(payload);
    console.log(byfar);
    yield storage.set("CART", byfar);
    alert("장바구니 추가완료")
}
  catch(error) {

  }
}

export function* fetchDeleteCart({ payload }) {
  try {
    const byfar = yield storage.get("CART");
    byfar.splice(payload, 1);
    console.log(byfar);
    yield storage.set('CART',byfar);

  }
    catch(error) {
  
    }
  }

export function* watchAddCart() {
  yield takeLatest([ADD_CART[REQUEST]], fetchAddCart);
}


export function* watchDeleteCart() {
    yield takeLatest([DELETE_CART[REQUEST]], fetchDeleteCart);
  }

export default function*()  {
    yield all([
        fork(watchAddCart),
        fork(watchDeleteCart),
      ]);
  }  