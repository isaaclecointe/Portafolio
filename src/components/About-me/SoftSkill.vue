<template>
   
      <div class="Habilidades-container">    

        <h1 class="titulo">Habilidades Blandas</h1>

      <FlechaSvg :direction="isExpanded ? 'up' : 'down'" @click="toggleExpand" class="flecha"/>
    </div>
    
     <div v-if="isExpanded" class="contenido">         
    
      
     <h4> Trabajo en equipo y en autonomia: </h4> 
         <p>
            Capaz de colaborar eficazmente en equipos multidisciplinarios 
            y también de trabajar de manera independiente cuando es necesario, 
            siempre manteniendo un alto nivel de responsabilidad y compromiso.
        </p>

    <h4> Disciplina y compromiso: </h4>
         <p>
            Me destaco por mi constancia en el cumplimiento de mis tareas, 
            asegurando que los objetivos se alcancen dentro de los plazos 
            establecidos y con la calidad esperada.
         </p>

    <h4> Optimismo y actitud de aprendizaje: </h4>   
        <p>
            Mantengo una actitud positiva ante los desafíos, 
            buscando siempre aprender algo nuevo y mejorar continuamente 
            tanto en mi desempeño personal como en los proyectos en los que participo.
        </p>
    

     </div>

</template>

<script >

   import FlechaSvg from './flechaSvg.vue';
import flechaSvg from './flechaSvg.vue';


   export default{
    components:{
        FlechaSvg
    },
    data(){
        return{
            isExpanded:false
        };
    },
    methods:{
        toggleExpand(){
            this.isExpanded = !this.isExpanded;
        }
    }
   };

</script>

<style scoped>

.Habilidades-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

}

.titulo{
  font-family: 'Poiret One', sans-serif;
  
}

.flecha{
  height: 20px;
  width: 40px;
  cursor: pointer;
}

.contenido{
  padding: 25px;
  font-family: 'Poiret One', sans-serif;
  font-size: 30px;
}

</style>