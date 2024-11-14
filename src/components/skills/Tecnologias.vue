<template>

    <nombreSvg />


  <div class="container-skills">
 <div class="container-habilidades1">
   <habilidades1 />
</div>
   <div class="container-habilidades2">
   <habilidades2 />
</div>
</div>

<!-- <div class="container-popup">
<Popup />
</div>
  -->

</template>

<script>


import nombreSvg from '../nombreSvg.vue';
import Habilidades1 from './Habilidades1.vue';
import Popup from './Popup.vue';
import Habilidades2 from './Habilidades2.vue';

export default{
    components:{
        nombreSvg,
        Habilidades1,
        Habilidades2,
        Popup
    },

};

</script>


<style>

.container-skills{
  display: flex;
  justify-content:space-between;
  align-items: flex-start;
  margin: 20px;
 
}

.container-habilidades1, .container-habilidades2{
    max-width: 45%;
    width: 100%;
}

.container-popup{
  margin-top: -19%;
  padding-left: 43px;


}  
</style>


