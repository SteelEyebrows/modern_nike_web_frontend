
import {
    GET_PRODUCTS,
    REQUEST,
  } from "../constants";
import * as api from "../../lib/api";
import { productsAction } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";

// const list = [
// 	{
// 		id:"aaa1",
// 		name: "justdoit1",
// 		price:"119,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"black",
//             sizes:["245","255","285"],
//             images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//               id:"002",  
//               color:"brown",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//                 id:"003",
//                 color:"white",
//                 sizes:["245","255","285"],
//                 images:[
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
  
//               ]},
//             ]
//       },
//       {
// 		id:"aaa2",
// 		name: "justdoit1",
// 		price:"119,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"black",
//             sizes:["245","255","285"],
//             images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//               id:"002",  
//               color:"brown",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//                 id:"003",
//                 color:"white",
//                 sizes:["245","255","285"],
//                 images:[
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
  
//               ]},
//             ]
//       },{
// 		id:"aaa3",
// 		name: "justdoit1",
// 		price:"119,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"black",
//             sizes:["245","255","285"],
//             images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//               id:"002",  
//               color:"brown",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//                 id:"003",
//                 color:"white",
//                 sizes:["245","255","285"],
//                 images:[
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
  
//               ]},
//             ]
//       },{
// 		id:"aaa4",
// 		name: "justdoit1",
// 		price:"119,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"black",
//             sizes:["245","255","285"],
//             images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//               id:"002",  
//               color:"brown",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//                 id:"003",
//                 color:"white",
//                 sizes:["245","255","285"],
//                 images:[
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
  
//               ]},
//             ]
//       },{
// 		id:"aaa5",
// 		name: "justdoit1",
// 		price:"119,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"black",
//             sizes:["245","255","285"],
//             images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//               id:"002",  
//               color:"brown",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//                 id:"003",
//                 color:"white",
//                 sizes:["245","255","285"],
//                 images:[
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
  
//               ]},
//             ]
//       },{
// 		id:"aaa6",
// 		name: "justdoit1",
// 		price:"119,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"black",
//             sizes:["245","255","285"],
//             images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//               id:"002",  
//               color:"brown",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//                 id:"003",
//                 color:"white",
//                 sizes:["245","255","285"],
//                 images:[
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
  
//               ]},
//             ]
//       },{
// 		id:"aaa7",
// 		name: "justdoit1",
// 		price:"119,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"black",
//             sizes:["245","255","285"],
//             images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//               id:"002",  
//               color:"brown",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//                 id:"003",
//                 color:"white",
//                 sizes:["245","255","285"],
//                 images:[
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
  
//               ]},
//             ]
//       },{
// 		id:"aaa8",
// 		name: "justdoit1",
// 		price:"119,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"black",
//             sizes:["245","255","285"],
//             images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//               id:"002",  
//               color:"brown",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//                 id:"003",
//                 color:"white",
//                 sizes:["245","255","285"],
//                 images:[
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
  
//               ]},
//             ]
//       },{
// 		id:"aaa9",
// 		name: "justdoit1",
// 		price:"119,000",
// 		members:false,
// 		colors:[
// 			{
//             id:"001",
//             color:"black",
//             sizes:["245","255","285"],
//             images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//               id:"002",  
//               color:"brown",
//               sizes:["245","255","285"],
// 			  images:[
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                 "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",

//             ]},
//             {
//                 id:"003",
//                 color:"white",
//                 sizes:["245","255","285"],
//                 images:[
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
//                   "https://i.pinimg.com/originals/fc/c7/10/fcc71020a8c438b5dd33cf6a884586d2.png",
  
//               ]},
//             ]
//       }
// ]

export function* fetchProducts({payload}) {
  try {
    const { data } = yield call(api.getProducts, "index.json");
    console.log("*************product*********")
    console.log(data);
    yield put(productsAction.productsSuccess(data));
}
  catch(error) {
    yield put(productsAction.productsFailure(error));
  }
}

export default function* watchDepartment() {
  yield takeEvery([GET_PRODUCTS[REQUEST]], fetchProducts);
}
