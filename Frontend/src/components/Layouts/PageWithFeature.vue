<template>
  <div id="feature-space">
    <slot name="feature" />
  </div>
  <div class="relative overflow-hidden bg-white py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <slot name="content" />
    </div>
  </div>
</template>
