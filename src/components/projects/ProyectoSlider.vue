<template>
  <section class="seccion-principal">
    <div class="proyecto-container">
      <!-- Contenedor principal con el slider -->
      <div class="proyecto-slider" ref="sliderContainer">
        <!-- Cada slide del proyecto -->
        <div 
          v-for="(slide, index) in proyectoSlides" 
          :key="index" 
          class="proyecto-slide" 
          :class="{ 'active': currentSlideIndex === index }"
        >
          <div class="slide-content">
            <div class="imagen-container">
  <template v-if="slide.img">
    <img :src="slide.img" :alt="slide.titulo" class="proyecto-imagen" />
  </template>
  <template v-else-if="slide.video">
    <video 
      class="proyecto-video"
      :src="slide.video"
      controls
      autoplay
      muted
      loop
    ></video>
  </template>
</div>

            <div class="info-container">
              <h2 class="proyecto-titulo">{{ slide.titulo }}</h2>
              <p class="proyecto-descripcion">{{ slide.descripcion }}</p>
              <div class="proyecto-detalles" v-if="slide.detalles">
                <h3>Características</h3>
                <ul>
                  <li v-for="(detalle, i) in slide.detalles" :key="i">{{ detalle }}</li>
                </ul>
              </div>
              <div class="proyecto-tecnologias" v-if="slide.tecnologias">
                <span v-for="(tech, i) in slide.tecnologias" :key="i" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Controles de navegación -->
      <div class="controles-navegacion">
        <button @click="prevSlide" class="control-btn prev-btn" :disabled="currentSlideIndex === 0">
          <span>&#10094;</span>
        </button>
        
        <!-- Indicadores de diapositivas -->
        <div class="slide-indicadores">
          <span 
            v-for="(_, index) in proyectoSlides" 
            :key="index"
            class="indicador"
            :class="{ 'active': currentSlideIndex === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
        
        <button @click="nextSlide" class="control-btn next-btn" :disabled="currentSlideIndex === proyectoSlides.length - 1">
          <span>&#10095;</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProyectoSlider',
  data() {
    return {
      currentSlideIndex: 0,
      slideWidth: 0,
      touchStartX: 0,
      touchEndX: 0,
      proyectoSlides: [
        {
          img: "/src/assets/Img hotel.png",
           titulo: "Hotel Alura - Sistema de Gestión",
           descripcion: "Aplicacion Desktop para empleados del Hotel Alura, cada empleado puede ingresar con su Usuario y password dandole acceso al sistema donde podra hospedar a los huespuedes que desean alojarse en sus instalaciones y toda su informacion se guarda automaticamente en una base de datos con la opcion de modificar la informacion del huespued cuando desee o eliminar la reserva y los datos del huesped ",
            detalles: [
            "Sistema de login para diferentes niveles de usuario",
            "Gestión de reservas y check-in/check-out",
            "Panel de administración intuitivo",
            "Reportes y estadísticas en tiempo real"
          ],
          tecnologias: ["Java", "Eclipse", "Windows Builder", "PostgreSQL", "Imagenes IA"]
        },
        {
           video:"/src/assets/videoHotel.mp4",
           descripcion:"ventana de Login el usuario puede iniciar sesion para ingresar al sistema"
        },
        {
           descripcion:"ventana de Login el usuario puede iniciar sesion para ingresar al sistema"
        }
       
     // Puedes agregar más slides con diferentes aspectos de tu proyecto
      ],
    };
  },
  mounted() {
    this.initSlider();
    window.addEventListener('resize', this.handleResize);
    
    // Configurar eventos táctiles para dispositivos móviles
    const sliderEl = this.$refs.sliderContainer;
    if (sliderEl) {
      sliderEl.addEventListener('touchstart', this.handleTouchStart, { passive: true });
      sliderEl.addEventListener('touchmove', this.handleTouchMove, { passive: true });
      sliderEl.addEventListener('touchend', this.handleTouchEnd, { passive: true });
    }
    
    // Establecer variable CSS para el número de slides
    this.$nextTick(() => {
      const container = this.$refs.sliderContainer;
      if (container) {
        container.style.setProperty('--slides-count', this.proyectoSlides.length);
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    
    const sliderEl = this.$refs.sliderContainer;
    sliderEl.removeEventListener('touchstart', this.handleTouchStart);
    sliderEl.removeEventListener('touchmove', this.handleTouchMove);
    sliderEl.removeEventListener('touchend', this.handleTouchEnd);
  },
  methods: {
    initSlider() {
      this.updateSlideWidth();
    },
    handleResize() {
      this.updateSlideWidth();
      this.updateSliderPosition();
    },
    updateSlideWidth() {
      if (this.$refs.sliderContainer) {
        this.slideWidth = this.$refs.sliderContainer.offsetWidth;
      }
    },
    updateSliderPosition() {
      if (this.$refs.sliderContainer) {
        const containerWidth = this.$refs.sliderContainer.parentElement.offsetWidth;
        const position = -this.currentSlideIndex * containerWidth;
        this.$refs.sliderContainer.style.transform = `translateX(${position}px)`;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex < this.proyectoSlides.length - 1) {
        this.currentSlideIndex++;
        this.updateSliderPosition();
      }
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        this.updateSliderPosition();
      }
    },
    goToSlide(index) {
      this.currentSlideIndex = index;
      this.updateSliderPosition();
    },
    // Soporte para gestos táctiles
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    handleTouchMove(e) {
      this.touchEndX = e.touches[0].clientX;
    },
    handleTouchEnd() {
      const touchDiff = this.touchStartX - this.touchEndX;
      
      // Si el deslizamiento fue significativo (más de 50px)
      if (Math.abs(touchDiff) > 50) {
        if (touchDiff > 0) {
          // Deslizar a la izquierda (siguiente)
          this.nextSlide();
        } else {
          // Deslizar a la derecha (anterior)
          this.prevSlide();
        }
      }
    }
  }
};
</script>

<style scoped>
.seccion-principal {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 0;
}

.proyecto-container {
  width: 90%;
  max-width: 1200px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  background-color: #fff;
}

.proyecto-slider {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  height: 600px;
}

.proyecto-slide {
  min-width: 200%;
  width: 50%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.proyecto-slide::-webkit-scrollbar {
  width: 6px;
}

.proyecto-slide::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.slide-content {
  display: flex;
  flex-direction: column;
  height: 100%;
   /*modificar aqui*/
}

.slide-content::-webkit-scrollbar {
  width: 6px;
}

.slide-content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.imagen-container {
  height: 300px;
  min-height: 300px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.proyecto-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 12px; /* o el valor que uses para tus imágenes */
  background-color: #3a3a3a;
}

.proyecto-imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.info-container {
  padding: 1.5rem;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction:column ;
  justify-content: center;
  gap: 1rem;
}

.proyecto-titulo {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  position: relative;
  line-height: 1.2;
}

.proyecto-titulo::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
}

.proyecto-descripcion  {
  font-size: 1.5rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
  font-family: 'QuickSand', sans-serif;
  font-weight: 400;
}

.proyecto-detalles{
  margin-bottom: 1rem;
  flex-shrink: 0; /*evita que se comprima*/
}

.proyecto-detalles h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #444;
}

.proyecto-detalles ul {
  padding-left: 1.2rem;
  margin: 0;
}

.proyecto-detalles li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-size: 1rem;
}

.proyecto-tecnologias {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-shrink: 0;
}

.tech-tag {
  background-color: #eaeaea;
  color: #555;
  padding: 0.25rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background-color: #3498db;
  color: white;
}

.controles-navegacion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f9f9f9;
}

.control-btn {
  background-color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.control-btn:hover:not(:disabled) {
  background-color: #3498db;
  color: white;
  transform: scale(1.05);
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slide-indicadores {
  display: flex;
  gap: 0.5rem;
}

.indicador {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.2s ease;
}

.indicador.active {
  background-color: #3498db;
  transform: scale(1.2);
}

/* Responsive design */
@media (min-width: 768px) {
  .slide-content {
    flex-direction: row;
  }
  
  .imagen-container {
    width: 50%;
    height: 100%;
    min-height: auto;
  }
  
  .info-container {
    width: 50%;
    height: 100%;
    padding: 2rem;
    justify-content: center;
    gap: 1.2rem;
  }
  
  .proyecto-imagen {
    height: 100%;
  }

  .proyecto-titulo{
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

   .proyecto-descripcion{
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  } 
  .proyecto-detalles h3{
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  .proyecto-detalles li{
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
  }

  .tech-tag{
    font-size: 0.85rem;
    padding: 0.3rem 0.7rem;
  }
}

@media (max-width: 767px) {
  .proyecto-slider {
    height: auto;
    min-height: 600px;
  }
  
  .proyecto-slide {
    min-height: 600px;
  }
  
  .imagen-container {
    height: 250px;
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .proyecto-titulo {
    font-size: 1.5rem;
  }
  
  .controles-navegacion {
    padding: 0.8rem 1rem;
  }
  
  .control-btn {
    width: 35px;
    height: 35px;
  }
}
</style>