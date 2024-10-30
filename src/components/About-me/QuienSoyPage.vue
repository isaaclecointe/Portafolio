<template>

  <div class="contenedor-general">
<div class="contenedor-foto">
  <foto/>
</div>

<div class="container-about-me">
  <nombreSvg class="nombreSvgQ"/>

<p class="about-me">
    Hey soy Isaac tengo 22 años y me apasiona la tecnologia los videojuegos y toda su arte de complejidad que los conforman.
    Actualmente vivo en Guatemala y me encuentro adquiriendo habilidades de programacion de manera autodidacta.
    Mi viaje en programacion empezo a finales de 2022 entre en un Bootcamp que tuvo una duracion de 7 meses  donde me espcialize en Backend
    los siguientes 5 meses me dedique a aprender y profundizar mas los conocimientos en tecnologias como MySQL,
    deplegar aplicaciones en la nube como Oracle  y adquirir certificacion de Oracle. 

  </p>
</div>
</div>

<main class="container-cajas">

<div class="container-objetivo">
  
<ObjetivoCaja />

</div>

<div class="container-habilidades">

<SoftSkill />

</div>

<div class="container-contratame">

  <Contratame />
 
</div>

</main>

</template>

<script>

 import nombreSvg from '../nombreSvg.vue';
 import Foto from './foto.vue';
 import foto from './foto.vue';
 import ObjetivoCaja from "./ObjetivoCaja.vue"
 import SoftSkill from './SoftSkill.vue';
 import Contratame from './Contratame.vue';

   export default{
    components: {
        nombreSvg,
        Foto,
        ObjetivoCaja,
        SoftSkill,
        Contratame
    }
   };

</script>

<style>


.contenedor-general{
  display: flex;
}

.nombreSvgQ{
  margin-top: -10%;
  /* display: block;
  height: auto;
  width: 276px;
  position: relative;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto; */
}

.contenedor-foto{

 margin-left: 12%;
 margin-top: 15%;

}


.container-cajas{
  scroll-snap-align: start;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  
}

.container-about-me{
  scroll-snap-align: start;
  min-height: 100vh;
  display: flex;
  text-align: justify;
  flex-direction: column; 
  justify-content: center;
  width: 45%;
  margin-left: 5%;
  margin-top: 5%;
}

.about-me{

  font-size: 30px;
  font-family: 'Poiret One', sans-serif;
  

}


.container-objetivo{
  width: 80%;
  margin-top: 5%;
  border: 2px solid #000;
}

.container-habilidades{
  width: 80%;
  box-sizing: border-box;
  margin-top: 1%;
  border: 2px solid #000;
}

.container-contratame{
  width: 80%;
 
  margin-top: 1%;
  border: 2px solid #000;
}
</style>