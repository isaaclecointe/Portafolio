<template>
    
   <!--/ From Uiverse.io by Saad3092003 */ --> 
<div class="one-div">
  <div class="text"> 
     <p>  
        Soy un desarrollador backend especializado en Java y SpringBoot, 
        comprometido con afrontar y resolver desafíos con perseverancia. 
        Mi enfoque está en la mejora continua y en ofrecer soluciones eficientes y confiables, 
        con entusiasmo de poder aportar valor y nuevas ideas a su empresa.
    </p> 
    </div>
</div>


</template>


<style>

.one-div {
 
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
}

.one-div .text {
  opacity: 0;
  transition: all 0.5s;
  text-align: left;
  line-height: 1.2em;
  max-width: 90%;
  font-size: 1.5em;
  font-family:'Poiret One', sans-serif;
}

.one-div:hover.one-div .text {
  scale: 1.05;
  opacity: 0.7;
}

.one-div:hover {
  box-shadow: 0 0 50px 0px, inset 5px 5px 20px 0px black;
}

@keyframes rot {
  0% {
    transform: rotateX(-15deg) translateY(0px);
  }

  50% {
    transform: rotateX(-15deg) translateY(-10px);
  }

  100% {
    transform: rotateX(-15deg) translateY(0px);
  }
}


</style>
