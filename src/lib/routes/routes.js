import {Login,Cs,Home,Products} from '../../page';


export const routes =[
    {
        path:'/',
        page:Home,
        exact:true
    },{
        path:'/cs',
        page:Cs,
        exact:true
    },{
        path:'/post',
        page:Login,
        exact:true
    },
    {
        path: "/products/:direction(\\d+|men|women)?/:id?",
        page: Products,
        exact: true
      },
]