<template>
  <Navigation />
  <BackToTop/>
  <div class="prviDio">
    <h1>LEON BAĆANI</h1>
    <div class="prviDio__Opis">
      
      <p>
        Hello, my name is Leon, and this is a little introduction page about me. This is
        created as a practice of Vue. If there is anything you would like to ask 
        or complain about feel free to <NuxtLink to="/contact">contact me.</NuxtLink>
      </p>
   

    <div class="swiperDiv">
      <Swiper
        :modules="[Pagination, Autoplay, EffectCards]"
        effect="cards"
        :grab-cursor="true"
        :pagination="{
          clickable: true,
        }"
    
        :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="photo in photos">
          <img :src="photo.url" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>
  <Footer/>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";


const photos = [
  { url: "../resources/images/ja1.jpeg" },
  { url: "../resources/images/ja3.jpeg" },
  { url: "../resources/images/ja2.jpeg" },
];
</script>
