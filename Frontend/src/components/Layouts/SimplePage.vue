<script>
import MastHead from "@jslone/mastHead/Masthead.vue";
</script>
<template><MastHead /></template>
<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    teaser: {
        type: String,
        required: true,
    },
});
</script>
