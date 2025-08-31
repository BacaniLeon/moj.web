<template>
  <Navigation />
  <BackToTop/>
  
    <h1 class="myExperience_h1"> MY EXPERIENCE</h1>
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
    description: "During my college summers and from June 2021 to October 2022, I gained extensive professional experience at DHL. I worked as a courier, where I was responsible for the safe and timely delivery of packages, and as a warehouse operations, managing third-party package sorting for partners including Hrvatska Pošta, Overseas Express, and BoxNow. In addition, I served as an export agent, where I built ULDs and supported the preparation and dispatch of packages via air transport. Throughout my time at DHL, I also strengthened my proficiency in Microsoft Excel, Word, and Outlook, using these tools to optimize workflows, improve accuracy, and increase overall efficiency.",
    duration: "Jun 2019 - Sep 2023",
  },

  {
    job: "Frontend Intern",
    place: "SHAPE:",
    description: "During my internship at SHAPE 404, I had the opportunity to work on real-life projects within a Vue.js environment. Through hands-on experience, I mastered Vue3 and Nuxt frameworks, enabling me to efficiently complete assignments within specified deadlines. This experience not only enhanced my technical skills but also provided valuable insight into working on professional projects in a dynamic environment.",
    duration: "Mar 2024 - Mar 2024",
  },

  {
    job: "QA Engineer",
    place: "ReversingLabs:",
    description: "Skilled in both manual and automated testing with expertise in Selenium (Python), Jenkins, Jira, and TestRail. Actively contribute to daily team meetings to discuss improvements, perform feature testing, and maintain test coverage by updating and rewriting outdated test cases.",
    duration: "Mar 2025 - Current",
  },

];
</script>
