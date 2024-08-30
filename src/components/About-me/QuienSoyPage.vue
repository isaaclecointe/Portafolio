<template>

<nombreSvg />

<foto/>
<div class="container-about-me">
<p class="about-me">
    Hey soy Isaac tengo 22 años y me apasiona la tecnologia los videojuegos y toda su arte de complejidad que los conforman.
    Actualmente vivo en Guatemala y me encuentro adquiriendo habilidades de programacion de manera autodidacta.
    Mi viaje en programacion empezo a finales de 2022 entre en un Bootcamp que tuvo una duracion de 7 meses  donde me espcialize en Backend
    los siguientes 5 meses me dedique a aprender y profundizar mas los conocimientos en tecnologias como MySQL,
    deplegar aplicaciones en la nube como Oracle  y adquirir certificacion de Oracle. 

  </p>
</div>

<div class="container-objetivo">
  
<ObjetivoCaja />

</div>

</template>

<script>

 import nombreSvg from '../nombreSvg.vue';
 import Foto from './foto.vue';
 import foto from './foto.vue';
 import ObjetivoCaja from "./ObjetivoCaja.vue"

   export default{
    components: {
        nombreSvg,
        Foto,
        ObjetivoCaja
    }
   };

</script>

<style>


.container-about-me{
  display: flex;
  text-align: justify;
  justify-content: center;
  width: 45%;
  margin-left: 40%;
  margin-top: -30%;
}

.about-me{

  font-size: 30px;
  font-family: 'Poiret One', sans-serif;
  

}


.container-objetivo{
  width: 80%;
  margin-left: 10%;
  margin-top: 10%;
  border: 1px solid #000;
}
</style>