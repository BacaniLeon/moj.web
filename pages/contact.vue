<template>
    <Navigation/>
    <BackToTop/>
    <div> 
      <form class="contactMe" @submit.prevent="submitForm">
        <img src="../public/resources/images/mail.gif" alt="">
          <div class="contactMe__Div">
            <h1>Get in touch</h1>
            <div class="contactMe__Name">
              <input type="text" name="firstname" placeholder="First Name" v-model="firstName" required autocomplete="off">
              <input type="text" name="lastname" placeholder="Last Name" v-model="lastName" required autocomplete="off">
            </div>
            <div class="contactMe__Details">
              <input type="text" name="email" placeholder="Email" v-model="email" required autocomplete="off">
              <input type="text" name="phone" placeholder="Phone Number" v-model="phone" required autocomplete="off">
            </div>  
            <textarea id="message" rows="4" placeholder="Type your message here" v-model="message" required autocomplete="off" maxlength="424"></textarea>
            <button class="contactMe__Submit" type="submit" >Submit</button>
          </div>
            
      </form>
    </div>
    <Footer/>
  </template>

  <script setup lang="ts">
import { ref } from "vue";
const WEB3FORMS_ACCESS_KEY = "0ef53230-3ec9-4b73-8040-ebf4d198cde8";
const firstName = ref("")
const lastName = ref("")
const email = ref("")
const phone = ref("")
const message = ref("")

const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      message: message.value,

    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
    alert('Submitted successfully');
  location.reload();
    
  }
}

</script>