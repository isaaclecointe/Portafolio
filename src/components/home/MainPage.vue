<template>
    
<nombreSvg class="nombreSvgMain"/>


  <main class="seccion1">
    <div class="container">
         <Descripcion />
         <Botonproyectos  @click="goToProyectos" />

   </div>

  </main>
<div class="seccion2">
<div class="contenedor-quien-soy" @click="goToQuienSoy">
    <QuienSoy/>
  </div>

  <div class="contenedor-post-habilidades" @click="goToHabilidades">   
  <PostHabilidades/>
</div>

<div class="contenedor-redes">
    <post-redes/>
</div>

<div class="contenedor-proyectos">
    <PostProyectos/>
</div>

<div class="contenedor-contratame">
     <post-contratame/>
</div>

</div>

</template>


<script>

import nombreSvg from '../nombreSvg.vue';
import QuienSoy from './quienSoy.vue';
import quienSoy from './quienSoy.vue';
import postHabilidades from './postHabilidades.vue';
import PostHabilidades from './postHabilidades.vue';
import postRedes from './postRedes.vue';
import PostRedes from './postRedes.vue';
import postProyectos from './postProyectos.vue';
import PostProyectos from './postProyectos.vue';
import postContratame from './postContratame.vue';
import PostContratame from './postContratame.vue';
import QuienSoyPage from '../About-me/QuienSoyPage.vue';
import Descripcion from './Descripcion.vue';
import Botonproyectos from './Botonproyectos.vue';
import MainProjects from '../projects/MainProjects.vue';


export default {
  
    components: {
    nombreSvg,
    QuienSoy,
        PostHabilidades,
        PostRedes,
        PostProyectos,
        PostContratame,
        Descripcion,
        Botonproyectos,
        MainProjects
  },

  mounted(){
    if(this.$route.path === '/' || this.$route.path === '/QuienSoyPage'){
      document.documentElement.style.scrollSnapType = 'y mandatory';
      document.documentElement.style.scrollBehavior = 'smooth';

      document.addEventListener('wheel', this.smoothScroll, { passive:false});
    }
  },

  beforeDestroy(){
    document.documentElement.style.scrollSnapType = '';
    document.documentElement.style.scrollBehavior = '';

    document.removeEventListener('wheel', this.smoothScroll);
  },

methods: {

  smoothScroll (event){
  event.preventDefault();
  const scrollStep = window.innerHeight / 50; // Ajusta el valor para controlar la velocidad
  window.scrollBy({
    top: event.deltaY > 0 ? scrollStep : -scrollStep,
    behavior: 'smooth'
  });
},

  goToQuienSoy(){
       this.$router.push('/QuienSoyPage');
  },

  goToHabilidades(){
            this.$router.push('/Tecnologias');
        },
        goToProyectos(){
  this.$router.push('/MainProjects')
   }  
 }
};





</script>



<style escoped>
   
.nombreSvgMain{
    position: absolute;
        left: 42%;
        top: -2%;
}

.enfoque{
  position: absolute;
   font-family:'Train One', sans-serif;
   font-weight: 100;
   font-size: 40px;
   margin-top: 8%;
   left: 30%;
}


html, body{
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

 .seccion1{
  scroll-snap-align: start;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   
 }

 .seccion2{
  scroll-snap-align: start;
   height: 100vh;
 }

.container{
 
   margin-top: -10%;
   padding: 25px;
   border-radius: 5px;
   width: 70%;
   height: 25%;
   line-height: 5em;
   text-align:justify;
   
  
}

.descripcion{

   font-size: 30px;
   font-family: 'Poiret One', sans-serif;

}
.contenedor-quien-soy {
  display: flex;
  justify-content: center; /* Centra el SVG horizontalmente */
  margin-right: 60%;      
  cursor: pointer;
}

.contenedor-post-habilidades{
  display: flex;
  justify-content: center; 
  margin-left: 1%;
  margin-top: -28%;
  cursor: pointer;
}

.contenedor-redes{
  display: flex;
  justify-content: center; 
  margin-left: 60%;
  margin-top: -28%;
}


.contenedor-proyectos{
  display: flex;
  justify-content: center; 
  margin-left: -30%;

  
}

.contenedor-contratame{
  display: flex;
  justify-content: center; 
  margin-left: 25%;
  margin-top: -28%;
}

</style>

