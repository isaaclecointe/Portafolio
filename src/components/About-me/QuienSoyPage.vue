<template>

  <div class="contenedor-general">
   <TemaClaroOscuro />

<div class="contenedor-foto">
   <Foto class="foto"/>
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
   </p>
    <p class="about-me2">
    Mi aventura en el mundo de la programación comenzó con la necesidad y el deseo de ayudar a las personas a simplificar
    sus tareas diarias, impulsar la innovacion y contribuir al desarrollo economico de mi comunidad.  
    Todo esto ocurre en un rincón del mundo llamado Guatemala, mi hogar, donde los volcanes hacen erupción y el Wi-Fi a veces también.
    </p>


    <p class="about-me3">
    con un Bootcamp que retó mi paciencia (y mis neuronas), y desde entonces me he sumergido en tecnologías como MySQL, 
    el despliegue de aplicaciones en la nube y certificación en Oracle. ¿Por qué? Porque me encanta transformar 
    ideas en realidades digitales.
      </p>


</div>

</div>

 <div class="caja-svg-titulo">
     <svg 
     xmlns="http://www.w3.org/2000/svg"
     width="254"
    height="254" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#c31d97" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
     class="svg-sombra">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
    <span class="Frase"> Mas Alla del codigo </span>
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
 import TemaClaroOscuro from '../home/TemaClaroOscuro.vue';

   export default{
    components: {
        nombreSvg,
        Foto,
        ObjetivoCaja,
        SoftSkill,
        Contratame,
        TemaClaroOscuro
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
 margin-left: 5%;
 margin-top: 8%;


}

.foto{
  border-radius: 20px;
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
  margin-top: 20%;
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

.container-about-me {
  display: flex;
  text-align: justify;
  flex-direction: column; 
  justify-content: center;
  width: 78%;
  margin-left: 5%;
  position: relative;
}

.about-me {
  height: auto;
  width: 900px;  
  font-size: 25px;
  margin-top: 8%;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  margin-bottom: 60px; /* Más espacio entre párrafos */
  padding: 25px 30px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-left: 4px solid #6c63ff;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(108, 99, 255, 0.15);
  transform: rotate(-0.5deg);
  position: relative;
  transition: all 0.3s ease;
  z-index: 1;
}

.about-me:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: 0 12px 35px rgba(108, 99, 255, 0.25);
}

.about-me2 {
  width: 800px;
  font-size: 25px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  margin-left: 50px; /* Más separación hacia la derecha */
  margin-top: 65px;
  margin-bottom: 60px;
  padding: 25px 30px;
  background: linear-gradient(225deg, #fff5f5 0%, #fed7d7 100%);
  border-left: 4px solid #ff6b6b;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.15);
  transform: rotate(0.8deg);
  position: relative;
  transition: all 0.3s ease;
  z-index: 1;
}

.about-me2:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: 0 12px 35px rgba(255, 107, 107, 0.25);
}

.about-me3 {
  width: 800px;
  font-size: 25px;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  margin-left: -80px; /* Posición intermedia más pronunciada */
  margin-top: 65px;
  padding: 25px 30px;
  background: linear-gradient(315deg, #f0fff4 0%, #c6f6d5 100%);
  border-left: 4px solid #48bb78;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(72, 187, 120, 0.15);
  transform: rotate(-0.6deg);
  position: relative;
  transition: all 0.3s ease;
  z-index: 1;
}

.about-me3:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: 0 12px 35px rgba(72, 187, 120, 0.25);
}

/* Elementos decorativos para crear espacios más creativos */
.about-me::before {
  content: '';
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  background: #6c63ff;
  border-radius: 50%;
  opacity: 0.3;
}

.about-me2::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid #ff6b6b;
  opacity: 0.4;
}

.about-me3::before {
  content: '';
  position: absolute;
  top: -12px;
  right: -12px;
  width: 24px;
  height: 24px;
  background: #48bb78;
  transform: rotate(45deg);
  opacity: 0.3;
}

.dark .about-me{
    background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
}
.dark .about-me2{
   background: linear-gradient(225deg, #742a2a 0%, #9c4221 100%);
}
.dark .about-me3{
  background: linear-gradient(315deg, #2f855a 0%, #215238 100%);
  border-left: 8px solid #1eb39f;
}


.caja-svg-titulo{
  display: flex;
   align-items: center;
   margin-top: 50px;
   margin-bottom: -20px;
   gap: 0.5rem;
   font-size: 1.2rem;
   margin-left: 50px;
}

 .svg-sombra{

  filter: drop-shadow(0 0 20px #99c221);
} 

.dark .svg-sombra{
  stroke:#fff70f ;
 filter: drop-shadow(0 0 20px #fff70f);
}

.Frase{
  font-family: "Noe Display", Georgia, Times, serif;
  font-size: 54px;
  
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