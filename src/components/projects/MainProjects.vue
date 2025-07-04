<template>

   <TemaClaroOscuro />

    <nombreSvg class="nombreSvgProject"/>

    <div class="nombre-proyectos">
    <ListaProyectos />
</div>

</template>

<script>
import TemaClaroOscuro from '../home/TemaClaroOscuro.vue';
import nombreSvg from '../nombreSvg.vue';
import ListaProyectos from './ListaProyectos.vue';

export default{
    components:{
        nombreSvg,
        ListaProyectos,
        TemaClaroOscuro
    },
                                                                     // border-radius: 0 var(--border-radius) 0 0;
}

</script>

<style >

.nombreSvgProject{
    position: absolute;
        left: 42%;
        top: -2%;
}

</style>