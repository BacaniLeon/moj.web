<template>
  <Navigation />
  <BackToTop/>
  
    <h1> MY EXPERIENCE</h1>
      <div class="myExperience">
      <Swiper
      :modules="[Pagination, Autoplay, EffectCube]"
          effect="cube"
          :grab-cursor="true"
          :pagination="{
            clickable: true,
            type: 'fraction'
          }"
          :cube-effect="{
            shadow:false
          }"
          :autoplay="{
          delay: 30000,
          disableOnInteraction: true,
        }"
          >
        <SwiperSlide v-for="exp in experience">
        <div class="myExperience__Exp">
          <h2>{{ exp.place }}</h2>
          <h3>{{ exp.job }}</h3>
        </div>
        <h4>{{ exp.duration }}</h4>
        <div class="myExperience__Description">
            <p>{{ exp.description }}</p>
        </div>
        
        
      </SwiperSlide>
      </Swiper>
    </div>
  <Footer />
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const experience = [
  {
    job: "Operations Agent",
    place: "DHL Express Croatia:",
    description: "Throughout my college summers and from June 2021 to October 2022, I gained valuable experience working at DHL. Initially, I served as a courier, responsible for driving and delivering packages efficiently. Subsequently, I transitioned to roles within the warehouse, where I handled third-party packages with meticulous care. During my time at DHL, I also honed my skills in Microsoft Excel, Word, and Outlook, effectively leveraging these tools to streamline processes and enhance productivity.",
    duration: "Jun 2019 - Sep 2023",
  },

  {
    job: "Frontend Intern",
    place: "SHAPE:",
    description: "During my internship at SHAPE 404, I had the opportunity to work on real-life projects within a Vue.js environment. Through hands-on experience, I mastered Vue3 and Nuxt frameworks, enabling me to efficiently complete assignments within specified deadlines. This experience not only enhanced my technical skills but also provided valuable insight into working on professional projects in a dynamic environment.",
    duration: "Mar 2024 - Mar 2024",
  },

];
</script>
