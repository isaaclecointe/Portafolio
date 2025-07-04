<template>
    
 
 <div class="contenedor-text"> 
  <h1 class="titulo-descripcion">{{ tituloVisible }}</h1>
  <p class="presentacion" :class="{visible: mostrarPresentacion}">HEY, ESTO ES LO QUE HAGO!</p>
     <p class="texto">  
        {{ textoVisible }} <span class="cursor">|</span>
    </p> 
    </div>



</template>


<script setup>

import {ref, onMounted} from 'vue'

const mostrarPresentacion = ref(false);

const tituloVisible = ref('');
const textoVisible = ref ('');

const textoTitulo =`I power apps.` ;
const textoCompleto = `Backend developer autodidacta en Java y Spring Boot. Me enfoco en soluciones claras, funcionales y bien pensadas. Aprender, mejorar y resolver es parte de mi día a día.` ;


onMounted(() => {
  // Paso 1: Mostrar presentación con animación
  setTimeout(() => {
    mostrarPresentacion.value = true;

    // Paso 2: Esperar a que termine la animación (0.6s + pequeño extra)
    setTimeout(() => {
      // Comienza a escribir el título
      let i = 0;
      const escribirTitulo = setInterval(() => {
        if (i < textoTitulo.length) {
          tituloVisible.value += textoTitulo.charAt(i);
          i++;
        } else {
          clearInterval(escribirTitulo);

          // Paso 3: Comienza a escribir el texto
          let j = 0;
          const escribirTexto = setInterval(() => {
            if (j < textoCompleto.length) {
              textoVisible.value += textoCompleto.charAt(j);
              j++;
            } else {
              clearInterval(escribirTexto);
            }
          }, 80);
        }
      }, 200);
    }, 1800); // <- espera antes de comenzar a escribir el título
  }, 100); // <- da tiempo al DOM para aplicar la animación
});




</script>


<style>

/* .one-div {
 
  position: relative;
  height: 380px;
  width: 68em;
  background-color: rgb(15, 15, 15);
  transform-style: preserve-3d;
  animation: rot 2s infinite ease;
  border-radius: 20px;
  box-shadow: 0 0 50px 0px, inset 0 0 90px 0px;
  color: white;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
} */

.contenedor-text{
  width: 68%;
  height: 380px;
  background-color: transparent; /* Sin fondo oscuro */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:flex-start;
  padding: 1rem;
}

.presentacion{
  order: -1;
  color: #99c221;
  font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease-in-out;
}

.presentacion.visible{
  opacity: 1;
  transform: translateX(0);
   transition-delay: 0.2s;
}

.titulo-descripcion{
  font-family: "Noe Display", Georgia, Times, serif;
  color: #41474c;
  font-weight: 500;
  font-size: 94px;
  margin-bottom: .33em;
  line-height: 1;
  margin: 0;
}

.texto{
  font-size: 28px;
  color: #41474c;
  font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  font-weight: 300;
  line-height: 40px;



  
}

.cursor {
  display: inline-block;
  width: 4px;
  background-color: black;
  animation: blink 1s step-end infinite;
}

/* Animacion de escritura*/

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}



</style>
