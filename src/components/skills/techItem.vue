<!-- <template>
     <div 
    class="skill-box"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <span class="title">{{ tech.name }}</span>
    <div class="skill-bar">
      <span class="skill-per" :style="{ width: tech.width }">
        <span class="tooltip">{{ tech.level }}</span>
      </span>
    </div>
  </div>
  </template>
  
  <script>
 
  
  export default {
  name: "TechItem",
  props: {
    tech: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleMouseOver() {
      // Emitimos un evento con la información de la tecnología
      this.$emit("show-popup", this.tech);
    },
    handleMouseLeave() {
      // Emitimos un evento para ocultar el popup
      this.$emit("hide-popup");
    },
  },
};
  </script>
  
  <style scoped>
  .skill-box {
    width: 100%;
    margin: 10px 0;
  }
  
  .skill-box .title {
    display: block;
    font-size: 20px;
    font-weight: 400;
    color: rgb(226, 226, 226);
    font-family: 'Poiret One', sans-serif;
  }
  
  .skill-box .skill-bar {
    height: 8px;
    width: 100%;
    border-radius: 6px;
    margin-top: 6px;
    background: rgba(236, 236, 236, 0.1);
  }
  
  .skill-bar .skill-per {
    position: relative;
    display: block;
    height: 100%;
    border-radius: 6px;
    background: rgb(226, 226, 226);
    animation: progress 0.9s ease-in-out forwards;
    opacity: 0;
  }
  
  .skill-per.html {
    width: 80%;
    animation-delay: 0.1s;
  }
  
  .skill-per.css {
    width: 60%;
    animation-delay: 0.1s;
  }
  
  .skill-per.javascript {
    width: 30%;
    animation-delay: 0.2s;
  }
  
  .skill-per .tooltip {
    position: absolute;
    right: -18px;
    top: -35px;
    font-size: 18px;
    font-weight: 300;
    color: rgb(0, 0, 0);
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 3px;
    background: rgb(226, 226, 226);
    white-space: nowrap;
    z-index: 1;
  }
  
  @keyframes progress {
    0% {
      width: 0;
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  </style> -->