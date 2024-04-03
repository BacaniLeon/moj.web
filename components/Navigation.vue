<template>
  <nav :class="[{navBar__MobileMenu: menuHidden}, 'navBar']">
    <img src="../public/resources/images/logo.svg">
    <img src="../public/resources/images/menu.png" class="navBar__Menu" @click="showMenu">
    <div class="navBar__Div">
    <NuxtLink to="/" @click="changeOverflow()">HOME</NuxtLink>
    <NuxtLink to="/about" @click="changeOverflow()" >ABOUT ME</NuxtLink>
    <NuxtLink to="/my-experience" @click="changeOverflow()">EXPERIENCE</NuxtLink>
    <NuxtLink to="/contact" class="navBar__Button" @click="changeOverflow()">CONTACT</NuxtLink>
  </div>
    
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
