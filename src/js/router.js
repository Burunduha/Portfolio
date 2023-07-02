import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './MainPage.vue'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/home', component: MainPage, alias: '/'},
    ]
});