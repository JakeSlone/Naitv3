<template>
  <div class="relative overflow-hidden bg-white py-16">     
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-lg">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {{ title }}
        </h1>
        <p class="mt-8 text-xl leading-8 text-gray-500">
          {{ teaser }}
        </p>
      </div>
      <div class="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  teaser: {
    type: String,
    required: true,
  }
});
</script>
