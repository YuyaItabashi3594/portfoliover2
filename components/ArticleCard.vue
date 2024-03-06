<script setup>
import { useDateFormat } from '@vueuse/core'

const props = defineProps({
  article: Object
})

</script>

<template>
  <NuxtLink :to="`https://zenn.dev${props.article.path}`">
    <div class="flex bg-zinc-800 hover:bg-zinc-600 border rounded-md duration-150 items-center justify-start divide-x">
      <p class="text-xl flex-none w-6 text-center">{{ props.article.emoji }}</p>
      <div class="flex flex-col ml-2 pl-1">
        <p class="text-xs">{{ useDateFormat(props.article.published_at, 'YYYY年MM月DD日') }}</p>
        <p class="text-xl">{{ props.article.title }}</p>
      </div>
    </div>
  </NuxtLink>

</template>