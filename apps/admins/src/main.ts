import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import DashBoard from './pages/PageDashBoard.vue'
import UserList from './pages/PageUserList.vue'

const routes = [
    { path: '/', component: DashBoard },
    { path: '/dashboard', component: DashBoard },
    { path: '/list/user', component: UserList },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
const app = createApp(App)
app.use(router).mount('#app')
