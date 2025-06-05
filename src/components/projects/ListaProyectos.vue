<template>

    <div class="proyectos-contenedor">

       <h2 class="tituloP">Proyectos</h2>
       <div class="dividor1"></div>

    <div class="project-list">
        <div v-for="(project, index) in projects"
         :key="index"  
        class="project-item"
        @mouseenter="showPreview(project.image)"
        @mouseleave="hidePreview"
        @click="goToProyectosDetalle"

        >
        <div class="proyecto-linea">
            <span class="project-name" > {{ project.name }}</span>
            <span class="type-project"> {{ project.type }}</span>
        </div>
            <div class="dividor" v-if="index < projects.length -1"></div>
        </div>
       
    </div>
        <transition name="fade">
        <div v-if="previewImage" class="preview-container">
            <img :src="previewImage" alt="vista previa del proyecto" class="preview-Image" />
           </div>
        </transition>  
    </div>

    
    
</template>


<script>

 import axios from 'axios';

 export default{
    data(){
         return{
            projects:[
                {name: "Hotel Alura", type: "Java CRUD", image:" /src/assets/ImgHotel.jpg"},
                {name: "Conversor de Divisas", type: "Java Desktop", image:"/src/assets/ImgConversor.jpg"},
                {name: "Encriptador de texto", type: "Pagina Web", image:"/src/assets/ImgEncript.jpg"},
                {name: "ScreenMatch", type: "Programa JavaScript", image:"/src/assets/ImgMaraton.jpg"},
                {name: "Barberia alura", type: "Pagina Web", image:"/src/assets/ImgBarberia.jpg"},
                {name: "Top 10 mejores peliculas", type: "Pagina Web", image:"/src/assets/ImgTopPelis.jpg"},
            ],
          
            previewImage: null
         };
    },

    methods:{
        showPreview(image){
            this.previewImage = image
        },
        hidePreview(){
            this.previewImage = null
        },

        goToProyectosDetalle(id){
            this.$router.push({name: 'ProyectoDetalles', params:{ id }});
        }
    },

    mounted(){
        axios
        .get('https://api.github.com/users/isaaclecointe/repos')
        .then(response =>{
            this.repos = repos.data
        })
        .catch(error => {
             console.log(error)
        });
    }

 };


</script>


<style >


.fade-enter-active, .fade-leave-active {
  transition: opacity 1.0s ease,  transform 1.0s ease, filter 1.0s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
 transform: scale(0.95);
 filter: blur(4px);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}



.tituloP{
    font-size: 3.0em;
    font-family: 'Poiret One', sans-serif;
}

.dividor1{
    height: 1px;
    background-color: #999;
    width: 100%;
    margin: 10px 0;
}

.proyecto-linea {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.proyectos-contenedor{
    position: fixed;
    bottom: 0;
    left: 105px;
    width: 40%;
    margin: 0px;
    padding: 20px;
  
   
}

.project-item{
    padding: 10px 0;
    font-size: 1.5em;
    cursor: pointer;
}

/* .project-item, .type-project{
    
} */



.dividor{
    height: 1px;
    background-color: #999;
    margin: 10px 0;
    width: 100%;
    
}

.project-name{
    font-family:'Poiret One', sans-serif;
    font-weight: bold;
    
}

.type-project{
    color: #999;
    font-size: 0.8em;

}

.preview-container{
    width: 50%;
    height: 70%;
    border-top-left-radius: 50px;
    overflow: hidden;
    position: fixed;
    top: 30%;
    right: 20px;
    right: -15px; 
}

.preview-Image{
      width: 100%;
      height: auto;
       
}

</style>