<template>
    
   <!--/ From Uiverse.io by Saad3092003 */ --> 
 <!--<div class="one-div"></div>-->
 <div class="contenedor-text"> 
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
  align-items: center;
  padding: 1rem;
  border-top: 4px solid;
  border-color: #750808;
  border-radius: 20px;
}

.texto{
  font-size: 18px;
  color: black;
  font-family: "Fredoka", sans-serif;
  white-space: pre-wrap;

  
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
