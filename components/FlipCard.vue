<script setup>

const props = defineProps({
  data: Object
})

const isFlipped = ref(false)

</script>

<template>
  <div class="relative duration-150" @click="isFlipped = !isFlipped">
    <transition name="flip" mode="out-in">
      <div v-if="isFlipped === false">
        <img :src="props.data.img" :alt="`${props.data.title}の画像`" class="opacity-60 z-0 object-fill w-52 h-64">
        <p class="text-2xl absolute top-1/3 left-1/2 -translate-x-1/2 z-10 text-center backdrop-blur-sm w-full">{{
    props.data.title }}</p>
      </div>
      <div v-else>
        <img v-if="props.data.img2" :src="props.data.img2" :alt="`${props.data.title}の画像2つ目`" class="opacity-20 z-0 object-fill w-52 h-64">
        <img v-else :src="props.data.img" :alt="`${props.data.title}の画像`" class="opacity-20 z-0 object-fill w-52 h-64">
        <p class="absolute top-0 left-0 w-full p-2">{{ props.data.description }}</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.flip-enter-active, .flip-leave-active {
  transition: all 0.3s ease;
}

.flip-enter-from {
  transform: rotateY(90deg);
}

.flip-leave-to {
  transform: rotateY(90deg);
}
</style>