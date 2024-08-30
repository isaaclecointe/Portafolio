

<template>
      <div class="objetivo-container">    

        <h1 class="titulo">Mi Objetivo</h1>

      <FlechaSvg :direction="isExpanded ? 'up' : 'down'" @click="toggleExpand" class="flecha"/>
    </div>
    
     <div v-if="isExpanded" class="contenido">         
    
        <p>
          Mi Objetivo actual es conseguir mi pirmera experiencia laboral
           donde tenga la opotunidad de aplicar mis conocimientos 
          y poder adquirir experiencia en el ambito laboral.
        </p>

     </div>


</template>

<script >
import FlechaSvg from './flechaSvg.vue';


export default{
    components:{
        FlechaSvg
    },
    data(){
      return{
        isExpanded: false
      };
    },
    methods: {
      toggleExpand(){
        this.isExpanded = !this.isExpanded;
      }
    }
};

</script>


<style scoped>

.objetivo-container{
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