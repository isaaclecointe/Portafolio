

<script>

export default{

  data(){
    return{
      isDark:false
    };
},
  
  methods: {
     toggleTheme() {  // ⭐ Agregar este método
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
  }
}

</script>




<template>

<div class="theme-switch">
  <input type="checkbox" id="theme-checkbox" v-model="isDark" @change="toggleTheme" />
  <label for="theme-checkbox" >
    <div></div>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
        ></path>
      </svg>
    </span>
  </label>
</div>


</template>


<style>

body{
  background-color: white;
  color: black;
}

html.dark body {
  background: #0e141b;
  color: white;
}

.dark .texto{
   color:white;
}
html.dark .container-objetivo{
  border: 2px solid white;
}

html.dark .container-habilidades{
  border: 2px solid white;
}

html.dark .container-contratame{
  border: 2px solid white;
}

html.dark .flecha-icono.stroke{
  border: 2px solid white;
}

/* From Uiverse.io by MRez321 */ 
.theme-switch {
  position: fixed;
  right: 1rem;
  top: 1rem;
  direction: rtl;
  z-index: 1000;
}

#theme-checkbox {
  display: none;
}

#theme-checkbox + label {
  /* change the font-size below to change the size of the switch button*/
  font-size: 2rem;
  height: 1em;
  width: 2.5em;
  border-radius: 0.25em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: #cecece;
  position: relative;
}

#theme-checkbox:checked + label {
  background-color: #3a3a3a;
}

#theme-checkbox + label:active {
  transform: scale(0.85);
  transition: transform 0.2s;
}

#theme-checkbox + label div {
  width: 0.8em;
  height: 0.8em;
  border-radius: inherit;
  position: absolute;
  top: 0.1em;
  left: 0.1em;
  z-index: 10;
  transition: 0.5s cubic-bezier(1, 0.33, 0.11, 1.34);
  background-color: #f2f2f2;
}

#theme-checkbox:checked + label div {
  /* left: calc(2.5em - .8em - .1em); */
  left: 1.6em;
  background-color: #212121;
}

#theme-checkbox + label span {
  display: flex;
}

#theme-checkbox + label svg {
  display: inline-block;
  height: 1em;
  width: 1em;
  padding: 0.15em;
  box-sizing: border-box;
}

#theme-checkbox + label span:first-of-type {
  color: #3a3a3a;
}

#theme-checkbox + label span:last-of-type {
  color: #cecece;
}


</style>