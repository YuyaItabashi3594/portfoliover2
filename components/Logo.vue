<script setup>

const props = defineProps({
  language: String,
  url: String
})

</script>

<template>
  <NuxtLink :to="url">
    <img :src="`/logo/${language}.png`" :alt="language" class="w-14 h-14" />
  </NuxtLink>
</template>