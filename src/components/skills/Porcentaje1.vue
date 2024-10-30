<template>
  <div class="contenedorBarra">
    <h3>{{ nivel }}</h3>
    <div class="barra-contenedor">
      <div class="barra-progreso" :style="{ width: `${porcentaje}%` }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nivel: {
      type: String,
      required: true
    },
    porcentaje: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.contenedorBarra {
  padding: 20px;
  width: 60%;
  margin-left: auto;
  margin-right: 0;
}

h3 {
  font-size: 20px;
  font-weight: 500;
  font-family: 'Oxanium', sans-serif;
  margin-left: 0;
  text-align: center;
  color: #333;
}

.barra-contenedor {
  width: 100%;
  height: 10px;
  background-color: #e0e0e0; /* Color de fondo */
  border-radius: 15px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  overflow: hidden;
}

.barra-progreso {
  height: 100%;
  background: linear-gradient(90deg, #388e3c, #4caf50); /* Degradado verde */
  border-radius: 15px 0 0 15px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  transition: width 0.4s ease; /* Animación suave */
  
}
</style>
