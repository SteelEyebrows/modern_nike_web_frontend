
import adaptiveSaga from "./_adaptive";
import awsSaga from './_aws';
import productsSaga from './_products';
import detailSaga from './_detail';
import authSaga from './_auth';
import cartSaga from './_cart';

export default [
    adaptiveSaga,
    awsSaga,
    productsSaga,
    detailSaga,
    authSaga,
    cartSaga
]