<template>
    
                                                                                        <!--From Uiverse.io by SouravBandyopadhyay -->
 <div :class="['notification', animated ? 'animated bounceInLeft' : '']"> 
 <div class="notiglow"></div> <div class="notiborderglow"></div>
 <div class="notititle">Acerca de esta habilidad</div> 
 <div class="container-html" v-html="icon"></div> 
 <div class="notibody">{{ description }}</div> </div>

</template>

<script>

   export default{
    props:{
      icon:{
        type: String,
        required: true
      },
      description:{
        type:String,
        required:true
      },
      animated:{
       type: Boolean, 
       default: false }
    }
   };

</script>

<style>

@-webkit-keyframes bounceInLeft 
{ from, 60%, 75%, 90%, to {
   -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
 }
  
 0% { 
  opacity: 0;
   -webkit-transform: translate3d(-3000px, 0, 0); 
   transform: translate3d(-3000px, 0, 0); 
  }
    
  60% {
     opacity: 1;
     -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0); 
  }
   
  75% {
     -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0); 
    }
     
    90% {
       -webkit-transform: translate3d(5px, 0, 0); 
       transform: translate3d(5px, 0, 0); }


       to {
         -webkit-transform: translate3d(0, 0, 0); 
         transform: translate3d(0, 0, 0); 
        } 
      }


      @keyframes bounceInLeft {
         from, 60%, 75%, 90%, to {
           -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
           animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
          }

          0% {
             opacity: 0;
              -webkit-transform: translate3d(-3000px, 0, 0); 
              transform: translate3d(-3000px, 0, 0); 
            }

            60% {
               opacity: 1;
                -webkit-transform: translate3d(25px, 0, 0);
                 transform: translate3d(25px, 0, 0); 
                }

                75% {
                   -webkit-transform: translate3d(-10px, 0, 0); 
                   transform: translate3d(-10px, 0, 0); 
                  }

                  90% {
                     -webkit-transform: translate3d(5px, 0, 0); 
                     transform: translate3d(5px, 0, 0); 
                    }

                        to {
                          -webkit-transform: translate3d(0, 0, 0); 
                          transform: translate3d(0, 0, 0); 
                          }
                        }
                
.animated {
   -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both; 
    animation-fill-mode: both; 
  } 
  
.bounceInLeft {
   -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft; 
  }

/* From Uiverse.io by SouravBandyopadhyay */ 
.notification{
  display: flex;
  flex-direction: column;
  isolation: isolate;
  position: relative;
  width: 46rem;
  height: 14rem;
  background: #29292c;
  border-radius: 1rem;
  overflow: hidden;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 16px;
  --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
  --color: #32a6ff
}

.notification:before {
  position: absolute;
  content: "";
  inset: 0.0625rem;
  border-radius: 0.9375rem;
  background: #18181b;
  z-index: 2
}

.notification:after {
  position: absolute;
  content: "";
  width: 0.25rem;
  inset: 0.65rem auto 0.65rem 0.5rem;
  border-radius: 0.125rem;
  background: var(--gradient);
  transition: transform 300ms ease;
  z-index: 4;
}

.notification:hover:after {
  transform: translateX(0.15rem)
}

.notititle {
  color: var(--color);
  padding: 0.65rem 0.25rem 0.4rem 1.25rem;
  font-weight: 500;
  font-size: 1.6rem;
  transition: transform 300ms ease;
  z-index: 5;
  font-family: 'Poiret one', sans-serif;
}

.notification:hover .notititle {
  transform: translateX(0.15rem)
}

.notibody {
  color: #99999d;
  padding: 0 1.25rem;
  transition: transform 300ms ease;
  z-index: 5;
  margin-left: 20%;
  margin-top: -10%;
  font-family: 'Poiret One', sans-serif;
  font-size: 25px;
  font-weight: 500;
}

.notification:hover .notibody {
  transform: translateX(0.25rem)
}

.notiglow,
.notiborderglow {
  position: absolute;
  width: 20rem;
  height: 20rem;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle closest-side at center, white, transparent);
  opacity: 0;
  transition: opacity 300ms ease;
}

.notiglow {
  z-index: 3;
}

.notiborderglow {
  z-index: 1;
}

.notification:hover .notiglow {
  opacity: 0.1
}

.notification:hover .notiborderglow {
  opacity: 0.1
}

.note {
  color: var(--color);
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 0.9rem;
  width: 75%;
}

.container-html{
    display: flex;
    align-items: flex-end;
    z-index: 8;
    margin-top: 40px;
    margin-left: 40px;;
}





</style>