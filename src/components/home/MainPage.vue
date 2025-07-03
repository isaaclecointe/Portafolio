<template>
    
    <nombreSvg class="nombreSvgMain"/>
   
  <main class="seccion1">

    <TemaClaroOscuro class="Boton-tema" />
  
    <div class="container">
         <Descripcion />
         <Botonproyectos  class="boton-proyecto"  @click="goToProyectos" />

   </div>

  </main>
<div class="seccion2">
<div class="contenedor-quien-soy" >
    <div class="Quien-Soy" @click="goToQuienSoy">
       <h2 class="sobre-mi">Quien Soy?</h2>
    </div>
  </div>

  <div class="contenedor-post-habilidades" >   
      <div class="postHabilidades">
            <h2 class="titulo-habilidades" @click="goToHabilidades" > Habilidades Tecnicas</h2>
            
            <p class="parrafo-habilidades">"Explora las herramientas y tecnologías que 
              domino para desarrollar soluciones digitales
              innovadoras y funcionales. ¡Descubre cómo 
              transformo ideas en realidad!"</p>
              
      </div>
</div>

<!--<div class="contenedor-redes">
    <post-redes/>
</div>-->

<div class="contenedor-proyectos">
      <div class="proyectos">
        <h2 class="titulo-proyectos"  @click="goToProyectos" >Mis Proyectos</h2>
               <p class="parrafo-proyectos"> 

                "Descubre mis proyectos más recientes, donde aplico creatividad y habilidades 
                técnicas para resolver problemas y aportar valor real."

               </p>
      </div>
</div>

<div class="contenedor-redes">
  <FlechaSvg :direction="isExpanded ? 'up' : 'down'" @click="toggleExpand" class="flecha"/>
  <div v-show="isExpanded">
  <redLinkedin />
  <redGitHub />
  <redDiscord />
  <redCorreo />
</div>
</div>

</div>

</template>


<script>

import TemaClaroOscuro from './TemaClaroOscuro.vue';
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
import flechaSvg from '../About-me/flechaSvg.vue';
import FlechaSvg from '../About-me/flechaSvg.vue';
import redLinkedin from './redLinkedin.vue';
import redGitHub from './redGitHub.vue';
import redDiscord from './redDiscord.vue';
import redCorreo from './redCorreo.vue';




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
        MainProjects,
        FlechaSvg,
        redLinkedin,
        redGitHub,
        redDiscord,
        redCorreo,
        TemaClaroOscuro
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

  data(){
    return{
      isExpanded:false,
     
    };

  },

methods: {


  

  toggleExpand(){
        this.isExpanded = !this.isExpanded;
      },  

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
   }, 
  
 }
};


</script>



<style >

   
.nombreSvgMain{
    position: absolute;
        left: 42%;
        top: -2%;
}

.boton-tema{
  position:fixed;
  top: 1rem;
  right: 1rem;
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
   width: 100vw;
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
   margin-right: auto;
   margin-left: 12%;
   margin-top: -15%;
   padding: 25px;
   border-radius: 5px;
   width: 95%;
   height: 25%;
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
  padding-top: 80px;
}

.Quien-Soy{
  width: 300px;
    height: 560px;
    border: 2px ;
    border-radius: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image:none;
    position: relative;
    transform-style: preserve-3d;
    animation: rot 2s infinite ease;
    overflow: hidden;
    box-shadow: 10px 10px;
    padding-left: 20px;
    transition: opacity 0.5s ease;
    cursor: pointer;
}

.sobre-mi{
  font-family: 'QuickSand', sans-serif;
  font-weight: 900;
  font-size: 48px;
  z-index: 1;
}


.Quien-Soy::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../src/assets/fotoMe.jpg");
    background-size: cover;
    opacity: 0;
    transition: opacity 0.8s ease;
    z-index: 0;
   
}

.Quien-Soy:hover::before {
    opacity: 0.8;
    align-items:first baseline;
}

.Quien-Soy:hover {
    
    align-items:first baseline;
}

.contenedor-post-habilidades{
  display: flex;
  justify-content: center; 
  margin-left: 20%;
  margin-top: -35%;
  cursor: pointer;
}

.postHabilidades{
  width: 650px;
  height: 220px;
  border: 2px solid;
  border-radius: 40px;
  box-shadow: 10px 10px;
  padding: 5px 20px;
}

.titulo-habilidades{
  font-family: 'QuickSand', sans-serif;
  font-weight: 900;
  font-size: 34px;
  cursor: pointer;
}

.parrafo-habilidades{
  font-family: 'QuickSand', sans-serif;
  font-weight: 500;
  font-size: 22px;
}

.contenedor-proyectos{
  display: flex;
  justify-content: center; 
  margin-left: 20%;
  margin-top: 3%;
  
}


.proyectos{
  width: 650px;
  height: 220px;
  border: 2px solid;
  border-radius: 40px;
  box-shadow: 0px 10px;
  padding: 5px 20px;
  justify-content: center;
}

.titulo-proyectos{
  font-family: 'QuickSand', sans-serif;
  font-weight: 900;
  font-size: 34px;
  cursor: pointer;
}

.parrafo-proyectos{
  font-family: 'QuickSand', sans-serif;
  font-weight: 500;
  font-size: 22px;
}

.contenedor-redes{
  width: 210px;
  border: 2px solid;
  margin-left: 84%;
  margin-top: -38.8%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px;

}



.contenedor-contratame{
  display: flex;
  justify-content: center; 
  margin-left: 25%;
  margin-top: -28%;
}



</style>

