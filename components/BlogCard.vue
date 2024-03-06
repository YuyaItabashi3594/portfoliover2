<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const props = defineProps({
  blog: Object
})

</script>

<template>
  <NuxtLink :to="props.blog._path">
    <div class="relative flex bg-zinc-800 hover:bg-zinc-600 border rounded-md duration-150 items-center justify-start">
      <div class="flex flex-col z-10">
        <p class="text-xs">{{ useDateFormat(props.blog.date,'YYYY年MM月DD日') }}</p>
        <p class="text-xl">{{ props.blog.title }}</p>
      </div>
      <img :src="`/blogicon/${props.blog.category}.png`" class="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  </NuxtLink>

</template>