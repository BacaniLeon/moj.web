<template>
  <Navigation />
  <BackToTop/>
  <div class="aboutMe">
    <h1> THINGS TO KNOW ABOUT ME</h1>
      <div class="aboutMe__Facts" v-for="fact in facts.slice(0,number)">
        <h2>{{ fact.title }}</h2>
          <div :class=fact.class>
            <p>{{ fact.paragraf }}</p>
            <img :src="fact.photo">
          </div>
      </div>
      <div :class="[{aboutMe__ButtonDiv: isActive}, 'aboutMe__ButtonHidden']">
        <button @click="hideButton" class="aboutMe__Button" >Load More</button>
      </div>
      
  </div>
  <Footer />
</template>

<script setup>
const number = ref(1);
const isActive=ref(true);
const facts = [
  {
    class: "aboutMe__FactsDugiParagraf",
    title: "Education",
    paragraf:
      "My education starts from the elementary school, 'OŠ Voltino'. After 8 years and finishing elementary school, I choose to apply and attend 'Tehničku Školu Zagreb', after successfully finishing the 4 years and making a graduation project (a game 'Parkour' using Unity) I decided on attending TVZ, and currently am in process of getting bachelor degree in programming and computer science.  ",
    photo: "../resources/images/tvz.svg",
  },

  {
    class: "aboutMe__FactsParagraf",
    title: "Sports",
    paragraf:
      "From young age I have tried multiple different sports. Some of those sports are football, badminton, taekwondo, but the one that stuck with me is basketball. I trained it for 6 years and am still to this day huge NBA fan. My favourite team is Dallas Mavericks and favourite player Luka Dončić",
    photo: "../resources/images/lukadoncic.jpg",
  },

  {
    class: 'aboutMe__FactsParagraf',
    title: "Animals",
    paragraf:
      "I love animals, i had a rabbit when i was a kid and after him we got 2 dogs, 'Bono' and 'Boki'. All animals are special in their own way, but in my opinion dogs are the best!",
    photo: "../resources/images/bokibono.jpeg",
  },

  {
    class: "aboutMe__FactsDugiParagraf",
    title: "Hobbies",
    paragraf:
      "Usually when i have some free time my friends and I will go out for a cup of coffee and just talk for hours, when im at home i enjoy watching good series or movie. On sunny days we play basketball on our local schoolground and every sunday we play in rented gym. Music wise, don't have a preffered genre, like to listen to many different genre, currently my favourite band and last concert i went to see is Måneskin",
    photo: "../resources/images/maneskin.jpeg",
  },
];

const hideButton = computed(() => {
  number.value++;
  console.log("number: ", number);
  if(facts.length===number.value){
    this.isActive=false;
  }
})
</script>
