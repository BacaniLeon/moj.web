<template>
  <nav :class="[{navBar__MobileMenu: menuHidden}, 'navBar']">
    <img src="../public/resources/images/logo.svg">
    <img src="../public/resources/images/menu.png" class="navBar__Menu" @click="showMenu()">
    <div class="navBar__Div">
    <NuxtLink to="/">HOME</NuxtLink>
    <NuxtLink to="/about">ABOUT ME</NuxtLink>
    <NuxtLink to="/my-experience">EXPERIENCE</NuxtLink>
    <NuxtLink to="/contact" class="navBar__Button">CONTACT</NuxtLink>
  </div>
    
  </nav>
</template>

<script setup>

const menuHidden= ref(false);
function showMenu(){
  this.menuHidden=!this.menuHidden;
}
  
</script>
