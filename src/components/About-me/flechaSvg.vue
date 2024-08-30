<template>
    <svg :class="['flecha-icono', direction]" 
    width="52" 
    height="34" 
    viewBox="0 0 52 34" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">


    <path 
    d="M50.4102 2L26.3367 32L2.26322 2" 
    stroke="black" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  />
</svg>

</template>

<script>

    export default {
        name: 'FlechaSvg',
        props:{
           direction:{
            type: String,
            default: 'down',
            validator(value){
                return['up', 'down'].includes(value);
            },
           },
        },
    };

</script>


<style>

.flecha-icono{

    width: 52px;
    height: 43px;
    transition: transform 0.5s ease;
}

.flecha-icono.up{
    transform: rotate(180deg);
}

.flecha-icono.down{
    transform: rotate(0deg);
}

</style>