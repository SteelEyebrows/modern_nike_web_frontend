import {Login,Home} from '../../page';


export const routes =[
    {
        path:'/',
        page:Home,
        exact:true
    },
    {
        path:'/post',
        page:Login,
        exact:true
    }
]