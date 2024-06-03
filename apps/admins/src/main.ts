import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.vue'
import DashBoard from './pages/PageDashBoard.vue'
import UserList from './pages/PageUserList.vue'
import UserProfile from './pages/PageUserProfile.vue'

const routes = [
    { path: '/', component: DashBoard },
    { path: '/dashboard', component: DashBoard },
    { path: '/user/list', component: UserList },
    { path: '/user/profile', component: UserProfile },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
const app = createApp(App)
app.use(router).mount('#app')
