<template>
     <div class="contratame-container">

        <h1 class="titulo"> Contratame </h1>
       
      
        <FlechaSvg :direction="isExpanded ? 'up' : 'down'" @click="toggleExpand" class="flecha"/>
      </div>
      <div class="contenedorFondo">
      <div v-if="isExpanded" class="formulario">          
     
       <input class="campoNombre" required="" type="text" placeholder="Tu Nombre">     <!-- From Uiverse.io by sonusng */ -->
         
       <input class="campoCorreo" required="" type="text" placeholder="Tu Email"> 

       <div class="seccionMensaje">
       <textarea  class="campoMensaje" rows="6" type="text" placeholder="Escribe tu mensaje por aqui" required></textarea>
       <botonEnviar/>
      </div>
    </div>  
    </div>

     
</template>



<script>
import botonEnviar from './botonEnviar.vue';
import FlechaSvg from './flechaSvg.vue';
import flechaSvg from './flechaSvg.vue';


export default{
    components:{
        FlechaSvg,
        botonEnviar
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



<style>

.titulo{
  font-family: 'Poiret One', sans-serif;
  cursor: pointer;


}


.contratame-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

}

.flecha{
  height: 20px;
  width: 40px;
  cursor: pointer;
}

.contenedorFondo{
   margin: 40px;
}

.formulario{
  display: flow-root;
  padding: 40px;
  place-items: flex-start;
  background-color: #c9c4c06e;
  border-radius: 60px;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.2);

}

.seccionMensaje{
  position: relative;
  margin-top: 7%;
}

.campoMensaje{
  width: 800px;
  height: 100px;
  margin: 0 22px;
  margin-top: -20px;
  padding: 20px 16px;
  background: transparent;
  border-radius: 7px;
  border: 2px solid #fe4567 ;
  color: #000;
  font-family: 'Poiret One', sans-serif;
  font-weight: 600;
  font-size: 20px;
}

.campoNombre, .campoCorreo{
  margin: 0 20px;
  width: 260px;
  height: 50px;
  padding: 0 16px;
  background: transparent;
  border-radius: 7px;
  border: 2px solid #fe4567 ;
  color: #000;
  font-family: 'Poiret One', sans-serif;
  font-weight: 600;
  font-size: 20px;
} 

input:valid, .campoMensaje:valid{
  border-color: #34bd81;
  animation: none;
}

@keyframes shake_541{
  0%, 100%{
    translate: 0;
  }

  25%{
    translate: 8px 0;
  }
  75%{
    translate: -8px 0;
  }
}

</style>