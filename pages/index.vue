<template>
  <Navigation v-show="isVisible"/>
  <BackToTop/>
  <div class="welcome">
  <h2>Welcome!</h2>
  <p>Press to see more</p>
  <img src="../public/resources/images/clickme.gif" @click="remove">
  </div>
  <div class="prviDio" v-if="isVisible"
  v-motion 
      :initial="{opacity: 0, y:400}"
      :visible-once="{y:0,
      opacity: 1,
      transition: {
      type: 'spring',
      stiffness: 250,
      damping: 100,
      mass: 35,
    },}"
      :delay=200
      >
    <h1>LEON BAĆANI</h1>
    <div class="prviDio__Description">
      <p>
        Hello, my name is Leon, I hold a Bachelor’s degree in Computer Engineering (bacc. ing. comp.) from the Zagreb University of Applied Sciences (TVZ).
        Currently, I am working as a QA Engineer at ReversingLabs in Zagreb, where I am gaining valuable industry experience. In my free time, I develop web pages using Nuxt.js environment, you can check out my projects on my linkedin page
        I consider myself hardworking, adaptable, and eager to learn. I thrive in dynamic environments and continuously seek opportunities to expand my knowledge and improve my skills in order to deliver high-quality results. If you have any questions or feedback, please don't hesitate to <NuxtLink to="/contact">contact me.</NuxtLink>
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
          <img class="img__ForHomePage":src="photo.url" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>
  <Footer v-show="isVisible"/>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";


const isVisible = ref(false);
const remove = computed(() => {
  isVisible.value=!isVisible.value;
  var showElement = document.querySelector(".welcome");
  if(isVisible.value==true){
  showElement.style.display="none";
  }
})
  


const photos = [
  { url: "../resources/images/ja1.jpeg" },
  { url: "../resources/images/ja2.jpeg" },
  { url: "../resources/images/ja3.jpeg" },
  

];
</script>
