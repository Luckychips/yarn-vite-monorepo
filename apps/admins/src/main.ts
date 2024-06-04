import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.vue'
// import {
    // PageCalendar,
    // PageChart,
    // PageChatting,
    // PageDashBoard,
    // PageNotification,
    // PageUserList,
    // PageUserProfile,
// } from './pages'

import PageCalendar from './pages/PageCalendar.vue'
import PageChart from './pages/PageChart.vue'
import PageChatting from './pages/PageChatting.vue'
import PageDashBoard from './pages/PageDashBoard.vue'
import PageNotification from './pages/PageNotification.vue'
import PageUserList from './pages/PageUserList.vue'
import PageUserProfile from './pages/PageUserProfile.vue'

const routes = [
    { path: '/', component: PageDashBoard },
    { path: '/dashboard', component: PageDashBoard },
    { path: '/user/list', component: PageUserList },
    { path: '/user/profile', component: PageUserProfile },
    { path: '/notification', component: PageNotification },
    { path: '/calendar', component: PageCalendar },
    { path: '/chart', component: PageChart },
    { path: '/chatting', component: PageChatting },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(router).mount('#app')
