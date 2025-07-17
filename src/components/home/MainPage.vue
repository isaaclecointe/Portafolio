<template>

   
  <div class="contendor-foto-miniatura">
    <img src="/src/assets/fotoMiniatura3.png" alt="foto" class="foto-miniatura">
    <span class="nombre-verificado">Isaac Lecointe</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
<path d="M16 8.375C16 8.93437 15.8656 9.45312 15.5969 9.92813C15.3281 10.4031 14.9688 10.775 14.5156 11.0344C14.5281 11.1188 14.5344 11.25 14.5344 11.4281C14.5344 12.275 14.25 12.9937 13.6875 13.5875C13.1219 14.1844 12.4406 14.4812 11.6438 14.4812C11.2875 14.4812 10.9469 14.4156 10.625 14.2844C10.375 14.7969 10.0156 15.2094 9.54375 15.525C9.075 15.8438 8.55937 16 8 16C7.42812 16 6.90938 15.8469 6.44688 15.5344C5.98125 15.225 5.625 14.8094 5.375 14.2844C5.05312 14.4156 4.71562 14.4812 4.35625 14.4812C3.55937 14.4812 2.875 14.1844 2.30312 13.5875C1.73125 12.9937 1.44687 12.2719 1.44687 11.4281C1.44687 11.3344 1.45938 11.2031 1.48125 11.0344C1.02813 10.7719 0.66875 10.4031 0.4 9.92813C0.134375 9.45312 0 8.93437 0 8.375C0 7.78125 0.15 7.23438 0.446875 6.74062C0.74375 6.24687 1.14375 5.88125 1.64375 5.64375C1.5125 5.2875 1.44687 4.92812 1.44687 4.57188C1.44687 3.72813 1.73125 3.00625 2.30312 2.4125C2.875 1.81875 3.55937 1.51875 4.35625 1.51875C4.7125 1.51875 5.05312 1.58438 5.375 1.71563C5.625 1.20312 5.98438 0.790625 6.45625 0.475C6.925 0.159375 7.44063 0 8 0C8.55937 0 9.075 0.159375 9.54375 0.471875C10.0125 0.7875 10.375 1.2 10.625 1.7125C10.9469 1.58125 11.2844 1.51562 11.6438 1.51562C12.4406 1.51562 13.1219 1.8125 13.6875 2.40937C14.2531 3.00625 14.5344 3.725 14.5344 4.56875C14.5344 4.9625 14.475 5.31875 14.3562 5.64062C14.8562 5.87813 15.2563 6.24375 15.5531 6.7375C15.85 7.23438 16 7.78125 16 8.375ZM7.65938 10.7844L10.9625 5.8375C11.0469 5.70625 11.0719 5.5625 11.0437 5.40938C11.0125 5.25625 10.9344 5.13438 10.8031 5.05312C10.6719 4.96875 10.5281 4.94063 10.375 4.9625C10.2188 4.9875 10.0938 5.0625 10 5.19375L7.09062 9.56875L5.75 8.23125C5.63125 8.1125 5.49375 8.05625 5.34062 8.0625C5.18437 8.06875 5.05 8.125 4.93125 8.23125C4.825 8.3375 4.77187 8.47187 4.77187 8.63437C4.77187 8.79375 4.825 8.92813 4.93125 9.0375L6.77187 10.8781L6.8625 10.95C6.96875 11.0219 7.07812 11.0562 7.18437 11.0562C7.39375 11.0531 7.55313 10.9656 7.65938 10.7844Z" fill="#3897F0"/>
</svg>
   </div> 

   
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

 
.contendor-foto-miniatura{
  position: absolute;
  width: 280px;
  display: flex;
  align-items: center;
  margin-bottom: -20px;
  gap: 0.4rem;
  margin-left: 10%;
  margin-top: 2%;
}

.foto-miniatura{
    
        height: 50px;
        width: 50px;
        border-radius: 200px;
}

.nombre-verificado{
   font-family: "Homemade Apple", cursive;
   font-size: 20px;
   font-weight: 400;
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
   margin-top: -20%;
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

