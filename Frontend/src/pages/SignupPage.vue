<template>
  <simple-page 
    :title="pageContent.title" 
    :teaser="pageContent.teaser"
  >
    <div class="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
      Sign up
    </div>
  </simple-page>
</template>
<script setup>
import SimplePage from "../components/Layouts/SimplePage.vue";
const pageContent = {
  title: "Sign up",
  teaser: "Would you like to hear more about our offers and specials? Sign up below to receive our monthly newsletter!",
}

</script>