<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const props = defineProps({
  blog: Object
})

console.log(props.blog)

</script>

<template>
  <NuxtLink :to="props.blog._path">
    <div class="relative flex bg-zinc-800 hover:bg-zinc-600 border rounded-md duration-150 items-center justify-center divide-x">
      <img :src="`/blogicon/${props.blog.category}.png`" class="absolute w-16 h-16" />

      <p>{{ props.blog.title }}</p>
    </div>
  </NuxtLink>

</template>