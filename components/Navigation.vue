<template>
  <nav :class="[{navBar__MobileMenu: menuHidden}, 'navBar']">
    <NuxtLink to="/" class="navBar__LogoLink"><img src="../public/resources/images/logo.svg"></NuxtLink>
    <img src="../public/resources/images/menu.png" class="navBar__Menu" @click="showMenu">
    <ul>
      <li><NuxtLink to="/" @click="changeOverflow()">HOME</NuxtLink></li>
      <li><NuxtLink to="/about" @click="changeOverflow()" >ABOUT ME</NuxtLink></li>
      <li><NuxtLink to="/my-experience" @click="changeOverflow()">EXPERIENCE</NuxtLink></li>
      <li><NuxtLink to="/contact" class="navBar__Button" @click="changeOverflow()">CONTACT</NuxtLink></li>
  </ul>
    
  </nav>
</template>

<script setup>

const menuHidden = ref(false);
const showMenu = computed(() => {
 menuHidden.value=!menuHidden.value;
 if(menuHidden.value===true){
  var htmlElement = document.querySelector("html");
  htmlElement.style.overflow="hidden";
 }
 if(menuHidden.value===false){
  var htmlElement = document.querySelector("html");
  htmlElement.style.overflow="visible";
 }
})

function changeOverflow(){
  var htmlElement = document.querySelector("html");
  htmlElement.style.overflow='visible';
}
  

  
</script>
