<template>


<!-- /* From Uiverse.io by Juanes200122 */  -->
<div class="container">
  <div class="skill-box" 
      v-for="tech  in technologies" 
      :key="tech.name"
       @mouseover="showPopup(tech)"
       @mouseleave="hidePopup">

    <span class="title">{{ tech.name }}</span>
    <div class="skill-bar">
      <span class="skill-per" :style="{ width: tech.width}">
        <span class="tooltip">{{ tech.level }}</span>
      </span>
    </div>
  </div>
  
</div>

<div class="container-popup">
<Popup 
v-if="popupVisible"
:icon="activeTech.icon"
:description="activeTech.description"
:animated="popupVisible"
/>
</div>

</template>

<script>

import Popup from './Popup.vue';

export default{
   
    components:{
      Popup
    },

    data(){
      return{
        popupVisible: false,
        activeTech: null,
        technologies:[{
            name:"Html",
            level:"avanzado",
            width:"80%",
            description:"Estructuracion de paginas web",
            icon:  `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="72" viewBox="0 0 16 16"><path fill="#76b819" d="M.946 0L2.23 14.4L7.992 16l5.777-1.602L15.055 0zM12.26 4.71H5.502l.161 1.809H12.1l-.485 5.422l-3.623 1.004l-3.618-1.004l-.247-2.774H5.9l.126 1.41l1.967.53l.004-.001l1.968-.531l.204-2.29H4.048l-.476-5.341h8.847l-.158 1.766z"/></svg> `
        },
         {
          name:"Css",
          level:"Intermedio",
          width:"60%",
          description:" Diseños responsivos y avanzados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg>`
         },
         {
          name:"JavaScript",
          level:"Principiante",
          width:"30%",
          description:" Desarrollo frontend con interactividad logica",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="72" viewBox="0 0 15 15"><path fill="#f9ca3e" fill-rule="evenodd" d="M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2" clip-rule="evenodd"/></svg>`
         }
      ]
      };
    },

    methods:{
      showPopup(tech){
        this.activeTech = tech;
        this.popupVisible = true;
      },
      hidePopup(){
        this.popupVisible = false;
      }
    }
};

</script>


<style scoped>

/* From Uiverse.io by Juanes200122 */ 
.container {
  position: relative;
  max-width: 650px;
  width: 100%;
  background: #282828;
  margin: 0 15px;
  padding: 10px 20px;
  line-height: 5em;
  border-radius: 7px;
}

.container .skill-box {
  width: 100%;
  margin: 10px 0;
}

.skill-box .title {
  display: block;
  font-size: 20px;
  font-weight: 400;
  color: rgb(226, 226, 226);
  font-family: 'Poiret one', sans-serif;
}

.skill-box .skill-bar {
  height: 8px;
  width: 100%;
  border-radius: 6px;
  margin-top: 6px;
  background: rgba(236, 236, 236, 0.1);
}

.skill-bar .skill-per {
  position: relative;
  display: block;
  height: 100%;
  width: 90%;
  border-radius: 6px;
  background: rgb(226, 226, 226);
  animation: progress 0.9s ease-in-out forwards;
  opacity: 0;
}

.skill-per.html {
  /*progreso de las diferentes lenguajes*/
  width: 80%;
  animation-delay: 0.1s;
}

.skill-per.css {
  /*progreso de las diferentes lenguajes*/
  width: 80%;
  animation-delay: 0.1s;
}

.skill-per.JavaScript {
  /*progreso de las diferentes lenguajes*/
  width: 50%;
  animation-delay: 0.2s;
}

@keyframes progress {
  0% {
    width: 0;
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.skill-per .tooltip {
  position: absolute;
  right: -18px;
  top: -35px;
  font-size: 18px;
  font-weight: 300;
  font-family: 'Poiret one', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  padding: 2px 4px;
  border-radius: 3px;
  background: rgb(226, 226, 226);
  z-index: 1;
  width: auto;
  white-space: nowrap;
  line-height: normal;
}

.tooltip::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  height: 10px;
  width: 10px;
  z-index: -1;
  background-color: rgb(226, 226, 226);
  transform: translateX(-50%) rotate(45deg);
}

.container-popup{
  margin-top: 7%;
  padding-left: 20px;
}


</style>


<!-- 
<style scoped>

/* From Uiverse.io by Juanes200122 */ 
.container {
  position: relative;
  max-width: 650px;
  width: 100%;
  background: #282828;
  margin: 0 15px;
  padding: 10px 20px;
  border-radius: 7px;
}
 
.container .skill-box {
  width: 100%;
  margin: 10px 0;
}

.skill-box .title {
  display: block;
  font-size: 20px;
  font-weight: 400;
  color: rgb(226, 226, 226);
  font-family: 'Poiret one', sans-serif;
}

.skill-box .skill-bar {
  height: 8px;
  width: 100%;
  border-radius: 6px;
  margin-top: 6px;
  background: rgba(236, 236, 236, 0.1);
}

.skill-bar .skill-per {
  position: relative;
  display: block;
  height: 100%;
  width: 90%;
  border-radius: 6px;
  background: rgb(226, 226, 226);
  animation: progress 0.9s ease-in-out forwards;
  opacity: 0;
}

.skill-per.html {
  /*progreso de las diferentes lenguajes*/
   width: 80%;
  animation-delay: 0.1s;
}

.skill-per.css {
  /*progreso de las diferentes lenguajes*/
  width: 80%;
  animation-delay: 0.1s;
}

.skill-per.JavaScript {
  /*progreso de las diferentes lenguajes*/
  width: 50%;
  animation-delay: 0.2s;
}

@keyframes progress {
  0% {
    width: 0;
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.skill-per .tooltip {
  position: absolute;
  right: -18px;
  top: -35px;
  font-size: 18px;
  font-weight: 300;
  font-family: 'Poiret one', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  padding: 2px 4px;
  border-radius: 3px;
  background: rgb(226, 226, 226);
  z-index: 1;
  width: auto;
  white-space: nowrap;
  line-height: normal;
}

.tooltip::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  height: 10px;
  width: 10px;
  z-index: -1;
  background-color: rgb(226, 226, 226);
  transform: translateX(-50%) rotate(45deg);
}

.container-popup{
  margin-top: 7%;
  padding-left: 20px;
} 


</style>  -->







































<!-- <template>
  <div class="contenedorBarra">
    <h3>{{ nivel }}</h3>
    <div class="barra-contenedor">
      <div class="barra-progreso" :style="{ width: `${porcentaje}%` }"></div>
    </div>
  </div>
</template> -->
<!-- 
<script>
export default {
  props: {
    nivel: {
      type: String,
      required: true
    },
    porcentaje: {
      type: Number,
      required: true
    }
  }
};
</script> -->


<!-- <style scoped>
.contenedorBarra {
  padding: 20px;
  width: 60%;
  margin-left: auto;
  margin-right: 0;
}

h3 {
  font-size: 20px;
  font-weight: 500;
  font-family: 'Oxanium', sans-serif;
  margin-left: 0;
  text-align: center;
  color: #333;
}

.barra-contenedor {
  width: 100%;
  height: 10px;
  background-color: #e0e0e0; /* Color de fondo */
  border-radius: 15px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  overflow: hidden;
}

.barra-progreso {
  height: 100%;
  background: linear-gradient(90deg, #388e3c, #4caf50); /* Degradado verde */
  border-radius: 15px 0 0 15px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  transition: width 0.4s ease; /* Animación suave */
  
}
</style> -->
