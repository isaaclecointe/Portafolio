<template>
    <div class="contenedor-discord" @click="copiarNombreUsuarioDiscord">

        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="35.6" viewBox="0 0 640 512"><path fill="#ffffff" d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485 485 0 0 0 404.081 32.03a1.82 1.82 0 0 0-1.923.91a338 338 0 0 0-14.9 30.6a447.9 447.9 0 0 0-134.426 0a310 310 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.7 483.7 0 0 0-119.688 37.107a1.7 1.7 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.02 2.02 0 0 0 .765 1.375a487.7 487.7 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348 348 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321 321 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251 251 0 0 0 9.109-7.137a1.82 1.82 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.81 1.81 0 0 1 1.924.233a235 235 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.4 301.4 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391 391 0 0 0 30.014 48.815a1.86 1.86 0 0 0 2.063.7A486 486 0 0 0 610.7 405.729a1.88 1.88 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541M222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241m195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241"/></svg>
              
        <p class="texto-Discord"> Copy Username Discord</p>
    </div>

    <div v-if="mostrarMensaje" class="exito">
        <!--/* From Uiverse.io by andrew-demchenk0 */-->

    <div class="success__icon">
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" fill="#393a37" fill-rule="evenodd"></path></svg>
    </div>
    <div class="success__title">Nombre de usuario copiado!</div>
    <div class="success__close" @click="cerrarMensaje"><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 
        1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37">
      </path>
     </svg>
  </div>
</div>
</template>

<script>

export default{
       data(){
        return{
            mostrarMensaje:false
        };
       },
   
    methods:{
         copiarNombreUsuarioDiscord(){

const discordNombre = "isaaclecointe#8146";
 
if(navigator.clipboard){
    navigator.clipboard.writeText(discordNombre)
    .then(() => {
       this.mostrarMensaje = true;
       setTimeout(() =>{
        this.mostrarMensaje = false;
       }, 10000);
    })
    .catch(err =>{
        console.error("Error al copiar el nombre de usuario:", err );
        alert("No se pudo copiar el nombre de usuario.");
    });
}else{
    const inputTemporal = document.createElement("input");
    inputTemporal.value = discordNombre;
    document.body.appendChild(inputTemporal);
    inputTemporal.select();
    document.execCommand("copiar");
    document.body.removeChild(inputTemporal);
    this.mostrarMensaje = true;
    setTimeout(() => {
        this.mostrarMensaje = false;
    }, 3000);
  
}
},
cerrarMensaje(){
    this.mostrarMensaje = false;
}
    }
};

</script>


<style>

.contenedor-discord{
    display: flex;
    width: 170px;
    height: 100px;
    background-color: #7327d6;
    padding: 20px;
    border-radius: 20px;
    margin-top: 12%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
}

.texto-Discord{
    font-family: 'QuickSand', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: rgb(245, 245, 244);
    
    margin: 0;
    
}

/* From Uiverse.io by andrew-demchenk0 */ 
.exito {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #EDFBD8;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
 
}

.success__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.success__icon path {
  fill: #84D65A;
}

.success__title {
  font-weight: 500;
  font-size: 14px;
  color: #2B641E;
}

.success__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.success__close path {
  fill: #2B641E;
}


</style>