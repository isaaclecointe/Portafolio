import { createRouter, createWebHistory } from "vue-router";

import LoadingScreen from '../components/LoadingScreen.vue';
import MainPage from "../components/home/MainPage.vue";
import QuienSoyPage from "../components/About-me/QuienSoyPage.vue";
import Tecnologias from "../components/skills/Tecnologias.vue";
import MainProjects from "../components/projects/MainProjects.vue";
import ProyectoDetalles from "../components/projects/ProyectoDetalles.vue";

const routes = [
    {path:'/', name: 'Loading', component: LoadingScreen},
    {path:'/MainPage', name: 'Main', component: MainPage},
    {path:'/QuienSoyPage', name: 'QuienSoy', component: QuienSoyPage},
    {path:'/Tecnologias', name: 'Tecnologias', component: Tecnologias},
    {path:'/MainProjects', name: 'Proyectos', component: MainProjects},
    {path:'/ProyectoDetalles', name: 'ProyectoDetalles', component: ProyectoDetalles}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});




router.beforeEach((to, from, next) => {
    console.log('Verificando si se ha cargado la página');
 if(!sessionStorage.getItem('loaded')){
    console.log('Primera carga, redirigiendo a Loading...');
    sessionStorage.setItem('loaded', 'true');
    if(to.name !== 'Loading'){
    next({name:'Loading'});
    }else{
        next();

    }
 }else{
    console.log('Ya se ha cargado previamente, continuando...');
    next();
 }

 
window.addEventListener('beforeunload', () => {
    sessionStorage.removeItem('loaded');
  });

});



router.afterEach((to, from) => {
 if(to.name === 'Loading' && from.name !== 'Main'){
    next({name:'Main'});
 }
});

export default router;