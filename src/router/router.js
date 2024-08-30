import { createRouter, createWebHistory } from "vue-router";

import LoadingScreen from '../components/LoadingScreen.vue';
import MainPage from "../components/home/MainPage.vue";
import QuienSoyPage from "../components/About-me/QuienSoyPage.vue";

const routes = [
    {path:'/', name: 'Loading', component: LoadingScreen},
    {path:'/MainPage', name: 'Main', component: MainPage},
    {path:'/QuienSoyPage', name: 'QuienSoy', component: QuienSoyPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
 if(to.name === 'Main' && from.name !== 'Loading'){
    next({name:'Loading'});
 }else{
    next();
 }
});

export default router;