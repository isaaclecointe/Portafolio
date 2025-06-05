<template>

  <div class="contenedor-general">
<div class="contenedor-foto">
   <Foto />
  </div>
  <div class="contenedor-loader">
    <span class="signal">Señal</span>
  <div class="loader"></div>

</div>

<div class="container-about-me">

  <div class="titulo-sobre">
    <H1 class="titulo-mi">CTRL + Z en la vida no existe, Asi que aqui estoy </H1>
  </div>

  <p class="about-me">
    Hey, soy Isaac Lecointe.
    Sí, Lecointe, como suena en francés: Luh-cuánt. Un apellido tan poco común que hasta yo tuve que practicar cómo decirlo y, 
    de paso, confundir a quien intente pronunciarlo. Pero, dejando eso de lado, soy un joven apasionado 
    por la tecnología, los videojuegos y el arte complejo que los convierte en algo mágico.
    <br>
    <br>
    Mi aventura en el mundo de la programación comenzó con la necesidad y el deseo de ayudar a las personas a simplificar
    sus tareas diarias, impulsar la innovacion y contribuir al desarrollo economico de mi comunidad.  
    Todo esto ocurre en un rincón del mundo llamado Guatemala, mi hogar, donde los volcanes hacen erupción y el Wi-Fi a veces también.
    <br>
    <br>
    con un Bootcamp que retó mi paciencia (y mis neuronas), y desde entonces me he sumergido en tecnologías como MySQL, 
    el despliegue de aplicaciones en la nube y certificación en Oracle. ¿Por qué? Porque me encanta transformar 
    ideas en realidades digitales.

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

.contenedor-loader{
  position: fixed; /* Se posiciona relativo al viewport */
  top: 20px;       /* Ajusta la distancia desde arriba */
  right: 20px;     /* Ajusta la distancia desde la derecha */
  display: flex;   /* Alinea los elementos en línea */
  align-items: center; /* Centra verticalmente el texto y el loader */
}


.signal {
  font-size: 23px; /* Tamaño del texto, ajústalo según necesites */
  font-family: 'QuickSand', sans-serif; /* O la fuente que prefieras */
  color: #000;     /* O el color que desees */
  margin-right: 65px; /* Espacio entre el texto y el loader */
}

.loader {
  box-sizing: border-box;
  position: fixed;
  display: block;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 25px;
  border: 2px solid;
  border-radius: 3px;
  margin-left: -3px
}

.loader::after,
.loader::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  height: 15px;
  border-radius: 2px;
  background: currentColor;
  top: 3px
}

.loader::before {
  right: -4px;
  border-radius: 3px;
  width: 4px
}

.loader::after {
  width: 1px;
  left: 3px;
  animation: full 3s ease-in-out infinite;
}

@keyframes full {
  20% {
    background-color: grey
  }

  45% {
    background-color: grey;
  }

  to {
    width: 50px;
    background-color: black;
  }
}

.contenedor-foto{
 margin-left: -2%;
 margin-top: -3%;

}


.container-cajas{
  /*scroll-snap-align: start;*/
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  
}

.container-about-me{
  display: flex;
  text-align: justify;
  flex-direction: column; 
  justify-content: center;
  width: 78%;
  margin-left: 5%;
 
  
}

.titulo-sobre{
  margin-top: 5%;
  width: 70%;
  background: #000;
  padding: 0 5px;
  border-radius: 20px;
  
}

.titulo-mi{
  font-family: "Fredoka", sans-serif;
  font-weight: 400;
  color: rgb(248, 248, 248);
}

.about-me{
  height: 500px;
  width: 900px;  
  font-size: 25px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  scrollbar-width: none;
  scrollbar-color: rgba(100, 100, 100, 0.5) transparent;
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