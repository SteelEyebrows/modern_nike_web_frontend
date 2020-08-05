import {Login,Cs,Home,Products,Detail} from '../../page';


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
    {
        path: "/detail/:id/:color",
        page: Detail,
        exact: true
    },
]