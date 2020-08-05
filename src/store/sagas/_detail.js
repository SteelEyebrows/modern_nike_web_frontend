
import {
    GET_DETAIL,
    REQUEST,
  } from "../constants";
import * as api from "../../lib/api";
import { detailAction } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";


// const list = 
// 	{
// 		id:"acg-zoom-air-ao",
// 		name: "나이키 ACG 줌 에어 AO",
// 		price:"169,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"FUSION VIOLET",
//             sizes:["245","255","285"],
//             images:[
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/FUSION+VIOLET/1.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/FUSION+VIOLET/2.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/FUSION+VIOLET/3.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/FUSION+VIOLET/4.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/FUSION+VIOLET/5.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/FUSION+VIOLET/6.jpg",
//             ]},
//             {
//               id:"002",  
//               color:"LASER CRIMSON",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/LASER+CRIMSON/1.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/LASER+CRIMSON/2.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/LASER+CRIMSON/3.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/LASER+CRIMSON/4.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/LASER+CRIMSON/5.jpg",
//                 "https://s3.ap-northeast-2.amazonaws.com/modern.nike.web/detail/acg-zoom-air-ao/LASER+CRIMSON/6.jpg",
//             ]}
//             ]
//       }



export function* fetchDetail({ payload }) {
  try {
    const { data } = yield call(api.getDetail,"index.json");
    yield put(detailAction.detailSuccess(data[payload]));
}
  catch(error) {
    yield put(detailAction.detailFailure(error));
  }
}

export default function* watchDetail() {
  yield takeEvery([GET_DETAIL[REQUEST]], fetchDetail);
}
