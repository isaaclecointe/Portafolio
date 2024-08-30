<template>
    
<nombreSvg />

<h1 class="enfoque">Back-End Developer jr. Java</h1>
  <main>
    <div class="container">
          
         <p class="descripcion"> 
          

        Soy un desarrollador backend especializado en Java y SpringBoot, 
        comprometido con afrontar y resolver desafíos con perseverancia. 
        Mi enfoque está en la mejora continua y en ofrecer soluciones eficientes y confiables, 
        con entusiasmo de poder aportar valor y nuevas ideas a su empresa.

         </p>

   </div>

  </main>

<div class="contenedor-quien-soy" @click="goToQuienSoy">
    <QuienSoy/>
  </div>

  <div class="contenedor-post-habilidades">
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


export default {
  
    components: {
    nombreSvg,
    QuienSoy,
        PostHabilidades,
        PostRedes,
        PostProyectos,
        PostContratame
  },

methods: {
  goToQuienSoy(){
       this.$router.push('/QuienSoyPage');
  }
 }
};

</script>



<style>
   
.nombre-svg{
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


 main{
   min-height: 120vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   
 }

.container{
 
   border: 1px solid #000;
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

