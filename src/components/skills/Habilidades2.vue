<template>

    <!-- /* From Uiverse.io by Juanes200122 */  -->
    <div class="container2">
      <div class="skill-box2" >
        <span class="title2">Java</span>
    
        <div class="skill-bar2">
          <span class="skill-per Java">
            <span class="tooltip2">Avanzado</span>
          </span>
        </div>
      </div>
    
      <div class="skill-box2">
        <span class="title2">MySQL</span>
    
        <div class="skill-bar2">
          <span class="skill-per MySQL">
            <span class="tooltip2">Intermedio</span>
          </span>
        </div>
      </div>
      <div class="skill-box2">
        <span class="title2">SpringBoot</span>
    
        <div class="skill-bar2">
          <span class="skill-per SpringBoot">
            <span class="tooltip2">Principiante</span>
          </span>
        </div>
      </div>

      <div class="skill-box2">
        <span class="title2">Git y Github</span>
    
        <div class="skill-bar2">
          <span class="skill-per Git">
            <span class="tooltip2">Intermedio</span>
          </span>
        </div>
      </div>


      <div class="skill-box2">
        <span class="title2">Python</span>
    
        <div class="skill-bar2">
          <span class="skill-per Python">
            <span class="tooltip2">Principiante</span>
          </span>
        </div>
      </div>


      <div class="skill-box2">
        <span class="title2">Oracle Cloud</span>
    
        <div class="skill-bar2">
          <span class="skill-per Oracle">
            <span class="tooltip2">Intermedio</span>
          </span>
        </div>
      </div>

    </div>
    
    
    </template>
    
    
    <style scoped>
    
    /* From Uiverse.io by Juanes200122 */ 
    .container2 {
      position: relative;
      max-width: 600px;
      width: 100%;
      background: #282828;
      margin: 0 15px;
      padding: 10px 20px;
      border-radius: 7px;
      line-height: 5em;
    text-align: justify;
    }
    
    .container2 .skill-box2 {
      width: 100%;
      margin: 10px 0;
    }
    
    .skill-box2 .title2 {
      display: block;
      font-size: 20px;
      font-weight: 400;
      color: rgb(226, 226, 226);
      font-family: 'Poiret one', sans-serif;
    }
    
    .skill-box2 .skill-bar2 {
      height: 8px;
      width: 100%;
      border-radius: 6px;
      margin-top: 6px;
      background: rgba(236, 236, 236, 0.1);
    }
    
    .skill-bar2 .skill-per {
      position: relative;
      display: block;
      height: 100%;
      width: 90%;
      border-radius: 6px;
      background: rgb(226, 226, 226);
      animation: progress 0.9s ease-in-out forwards;
      opacity: 0;
    }
    
    .skill-per.Java {
      /*progreso de las diferentes lenguajes*/
      width: 80%;
      animation-delay: 0.1s;
    }
    
    .skill-per.MySQL {
      /*progreso de las diferentes lenguajes*/
      width: 50%;
      animation-delay: 0.1s;
    }
    
    .skill-per.SpringBoot {
      /*progreso de las diferentes lenguajes*/
      width: 30%;
      animation-delay: 0.2s;
    }

    .skill-per.Git{
      width: 50%;
      animation-delay: 0.2s;
    }

    .skill-per.Python{
      width: 35%;
      animation-delay: 0.2s;
    }

    .skill-per.Oracle{
      width: 45%;
      animation-delay: 0.2s;
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
    
    .skill-per .tooltip2 {
      position: absolute;
      right: -18px;
      top: -35px;
      font-size: 18px;
      font-weight: 300;
      font-family: 'Poiret one', sans-serif;
      color: rgb(0, 0, 0);
      font-weight: bold;
      padding: 2px 4px;
      border-radius: 3px;
      background: rgb(226, 226, 226);
      z-index: 1;
      width: auto;
      white-space: nowrap;
      line-height: normal;
    }
    
    .tooltip2::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -2px;
      height: 10px;
      width: 10px;
      z-index: -1;
      background-color: rgb(226, 226, 226);
      transform: translateX(-50%) rotate(45deg);
    }
    
    
    
 </style>