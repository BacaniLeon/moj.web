<template>
    <NuxtLink @click="toTop">
    <img src="../public/resources/images/backtotop.png" class="backToTop"/>
    </NuxtLink>
</template>

<script setup>
function toTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

</script>