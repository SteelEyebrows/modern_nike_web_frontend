import {Login,Cs,Home} from '../../page';


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
    }
]