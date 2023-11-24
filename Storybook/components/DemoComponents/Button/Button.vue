<template>
    <button
	    type="button"
	    class="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
	    :class="outlined ? 'border border-gray-200 hover:bg-gray-100' : 'bg-gray-700'"
>
    <slot></slot>
</button>
</template>

<script setup>
defineProps({
    outlined: Boolean,
});
</script>
