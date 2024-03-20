<script setup>
const props = defineProps({
  data: Object
})

</script>

<template>
  <ol class="shadow-md max-w-2xl mx-2">
    <li class="flex items-center justify-start ms-2 mb-4 md:mb-10">
      <div class="shrink-0">
        <img :src="props.data.img" class="w-32 p-2">
      </div>
      <div class="p-6">
        <p class="text-xl leading-tight font-medium">{{ props.data.title }}</p>
        <p class="mt-4 text-zinc-400">{{ props.data.description }}</p>
      </div>
    </li>
  </ol>
</template>