<template>

    <nombreSvg />

 <h1 class="titulo-habilidades">Habilidades Tecnicas</h1>

 <main>
 <div class="contenedor">
  
  <Teclas v-for="(tecnologia, index) in tecnologias" 
  :key="index" :nombreTecnologia="tecnologia.nombre" :nivel="tecnologia.nivel" :porcentaje="tecnologia.porcentaje"/>

 </div>
 
</main>

</template>

<script>


import nombreSvg from '../nombreSvg.vue';
import Teclas from './Teclas.vue';

export default{
    components:{
        nombreSvg,
        Teclas
    },
    data(){
        return{
            tecnologias:[
                {nombre: "HTML", nivel:'Avanzado', porcentaje:75},
                {nombre: "CSS", nivel:'Avanzado', porcentaje:75},
                {nombre: "JavaScript", nivel:'Intermedio', porcentaje:50},
                {nombre: "Java", nivel: 'Avanzado', porcentaje: 75},
                {nombre: "Spring Boot", nivel:'Principiante', porcentaje: 30},
                {nombre: "MySQL", nivel:'Intermedio', porcentaje:50},
                {nombre: "Oracle Cloud", nivel:'Intermedio', porcentaje:50},
                {nombre: "Python", nivel:'Principiante', porcentaje: 30},
                {nombre: "Git y Github", nivel:'Intermedio', porcentaje: 60}
            ]
        };
    }
};

</script>

<style scoped>

.titulo-habilidades{
    position: absolute;
   font-family:'Poiret One', sans-serif;
   font-weight: 100;
   font-size: 40px;
   margin-top: 8%;
   left: 10%;
}

main{
    min-height: 120vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

.contenedor{
    border: 2px solid #000;
   padding: 25px;
   border-radius: 50px;
   width: 80%;
   height: auto;
   margin-top: 15%;
}

</style>
