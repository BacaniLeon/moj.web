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
    description: "Have been working in DHL every summer break in college and from june 2021 till october 2022 the whole year. Worked as a courier, driving and delivering packages, worked inside the warehouse where i handled 3rd party packages. Worked in MS Excel, Word, Outlook.",
    duration: "Jun 2019 - Sep 2023",
  },

  {
    job: "Frontend Intern",
    place: "SHAPE:",
    description: "Did my internship in SHAPE 404. Worked on real life projects in Vue.js environment. Learned Vue3 and Nuxt in order to finish my assigments on time.",
    duration: "Mar 2024 - Mar 2024",
  },

];
</script>
