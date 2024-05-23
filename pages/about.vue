<template>
  <Navigation />
  <BackToTop/>
  <div class="aboutMe">
    <h1> THINGS TO KNOW ABOUT ME</h1>
      <div class="aboutMe__Facts" v-for="fact in facts" 
      v-motion 
      :initial="{opacity: 0,y:200}"
      :visible-once="{y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 100,
      mass: 35,
    },}">
        <h2>{{ fact.title }}</h2>
          <div :class=fact.class>
            <p>{{ fact.paragraf }}</p>
            <img :src="fact.photo">
          </div>
      </div>
  </div>
  <Footer />
</template>

<script setup>
const facts = [
  {
    class: "aboutMe__FactsLongParagraf",
    title: "Education",
    paragraf:
      "My educational journey began at elementary school, 'OŠ Voltino'. Following eight years there, I opted to pursue my studies at 'Tehnička Škola Zagreb'. Upon successfully completing the four-year program and presenting my graduation project (a game titled 'Parkour' developed using Unity), I made the decision to enroll at TVZ. Presently, I am in the process of earning my bachelor's degree in programming and computer science.  ",
    photo: "../resources/images/tvz.svg",
  },

  {
    class: "aboutMe__FactsParagraf",
    title: "Sports",
    paragraf:
      "From a young age, I explored various sports, including football, badminton, and taekwondo. However, it was basketball that truly captivated me. I dedicated six years to training in basketball and remain a passionate NBA fan to this day. My favorite team is the Dallas Mavericks, and I admire Luka Dončić as my favorite player.",
    photo: "../resources/images/lukadoncic.jpg",
  },

  {
    class: 'aboutMe__FactsParagraf',
    title: "Animals",
    paragraf:
      "I have always had a profound love for animals. As a child, I cherished my pet rabbit, and later, our family welcomed two beloved dogs named 'Bono' and 'Boki' into our home. While every animal holds a special place in my heart, I have a particular fondness for dogs, I believe they are truly remarkable companions!",
    photo: "../resources/images/bokibono.jpeg",
  },

  {
    class: "aboutMe__FactsLongParagraf",
    title: "Hobbies",
    paragraf:
      "During my free time, I often enjoy catching up with friends over a cup of coffee, engaging in long conversations that stretch for hours. At home, I find relaxation in watching compelling series or movies. On sunny days, you'll often find me on the local schoolground, playing basketball with friends, and every Sunday, we rent a gym to continue our basketball sessions. Regarding music, I don't have a preferred genre; instead, I appreciate a wide variety of musical styles. Currently, my favorite band is Måneskin, and I recently attended one of their concerts, which was an incredible experience.",
    photo: "../resources/images/maneskin.jpeg",
  },
];

</script>
