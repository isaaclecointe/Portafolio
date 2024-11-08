<template>
    <a href="https://www.linkedin.com/in/andres-lecointe" target="_blank" class="red-link">
    <div class="contenedor-linkedin">

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30.58805536438021" 
        viewBox="0 0 1046.16 1000"><path fill="#ffffff" 
        d="M237.485 1000V325.301H13.229V1000zM125.386 233.127c78.202 0 126.879-51.809 
        126.879-116.553C250.808 50.37 203.591-.001 126.87-.001C50.161-.001-.002 50.371-.002 
        116.574c0 64.747 48.665 116.553 123.924 116.553h1.457zM361.61 1000h224.256V623.215c0-20.165 
        1.457-40.309 7.379-54.724c16.212-40.289 53.111-82.017 115.06-82.017c81.149 0 113.613 61.872 
        113.613 152.572v360.949h224.242V613.129c0-207.241-110.636-303.668-258.183-303.668c-120.977 
        0-174.094 67.622-203.603 113.679h1.497v-97.853H361.615c2.943 63.31 0 674.699 0 674.699z"/></svg>


        <span class="direccion-linkedin"> linkedin.com/in/andres-lecointe</span>

    </div>
</a>

</template>

<style>

.contenedor-linkedin{
    display: flex;
    width: 170px;
    height: 100px;
    background-color: #2d45fa;
    padding: 20px;
    border-radius: 20px;
    margin-top: 20%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
}

.direccion-linkedin{
    font-family: 'QuickSand', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: rgb(245, 245, 244);
    margin-left: -8px; 
}

.red-link{
    text-decoration: none;
}

</style>