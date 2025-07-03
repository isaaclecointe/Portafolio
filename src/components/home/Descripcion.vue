<template>
    
 
 <div class="contenedor-text"> 
  <h1 class="titulo-descripcion">I power apps. </h1>
  <p class="presentacion">HEY, ESTO ES LO QUE HAGO!</p>
     <p class="texto">  
        {{ textoVisible }} <span class="cursor">|</span>
    </p> 
    </div>



</template>


<script setup>

import {ref, onMounted} from 'vue'

const textoVisible = ref ('');
const textoCompleto = `Soy un desarrollador backend especializado en Java y SpringBoot, comprometido con afrontar y resolver desafíos con perseverancia. Mi enfoque está en la mejora continua y en ofrecer soluciones eficientes y confiables,  con entusiasmo de poder aportar valor y nuevas ideas a su empresa.` ;


onMounted(() =>{
    let i = 0;
    const intervalo = setInterval(() => {
        if(i < textoCompleto.length){
            textoVisible.value += textoCompleto.charAt(i);
            i++;
        }else{
            clearInterval(intervalo);
        }
    }, 80);
})

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
  line-height: 45px;



  
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
