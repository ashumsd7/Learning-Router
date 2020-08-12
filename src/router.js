import Home from './components/Home'
import User from './components/user/User'
import UserDetails from './components/user/userDetail'
import UserEdit from './components/user/UserEdit'
import UserStart from './components/user/UserStart'
 import Header from './components/Header'
 import err from './components/404'

export const routes= [
    {path:'', components:{
        default: Home,
        'header-top': Header
    } },
    {path:'/user', components:{
        default: User,
        'header-bottom': Header
    },
     children:[
        {path:'', component: UserStart},
        {path:':id', component: UserDetails},
        {path:':id/edit', component: UserEdit},

    ]},
    { path:'/redirect-me', redirect: {name: 'home'}},
     { path:'*', component: err},

];