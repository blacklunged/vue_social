import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from './pages/mainPage.vue'
import ProfilePage from './pages/profilePage.vue'
import UsersPage from './pages/usersPage.vue'
import login from './pages/login.vue'
import registration from './pages/registration.vue'

Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        component:MainPage
    },
    {
        path:'/users',
        component:UsersPage
    },
    {
        path:'/profile/:id',
        component:ProfilePage
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/registration',
        component:registration
    },

]
export default new VueRouter({
    mode:'history',
    routes
})