<template>
    <div v-if = "events">
      <div v-for="event in events" :key="event.id"> 

      <h1> {{event.title }}</h1>
      
        
       
        <h5> Event Date:{{event.eventStartDate}}&nbsp;&nbsp;
         Location:{{event.other}}</h5>
        <p>{{ event.description }}</p>
       <div v-if="event.linkURL !== null && event.linkURL !== undefined && event.linkURL !== ''">
       <p><a :href="event.linkURL">OOk's Life Event link</a></p></div>
       
      </div> 
      
    </div>
  </template>
 <script setup>
 import { ref, onMounted } from 'vue'
 import { defineProps } from 'vue'
 
 // Define the props
 const props = defineProps({
   id: String
 })
 
 // Create a ref for the event details
 const events = ref(null)
 
 // Fetch the event details when the component is mounted
 onMounted(async () => {
  try {
    const res = await fetch(`/Event/${props.id}`)
   events.value = await res.json()
   
    
  } catch (error) {
    console.log(events)
    
  }
   
 })
 </script>
 <style scoped>
 .event {
   border: 1px solid #ccc;
   padding: 20px;
   margin-bottom: 20px;
   cursor: pointer;
 }
 
 .event h2 {
   margin: 0;
   margin-bottom: 15px;
   color: #333;
 }
 
 .event h5 {
   margin: 0;
   margin-bottom: 15px;
   color: #acd527;
 }
 
 .event p {
   margin: 0;
   margin-bottom: 10px;
 }
 
 .event a {
   color: #1a0dab;
 }
 </style>
 
  