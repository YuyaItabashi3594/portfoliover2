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
        <img :src="props.data.img" class="opacity-50 z-0 object-contain w-52 h-1/5">
        <p class="text-xl absolute top-1 left-1/2 -translate-x-1/2 z-10 text-center backdrop-blur-sm w-full">{{
    props.data.title }}</p>
      </div>
      <div v-else>
        <img :src="props.data.img" class="opacity-50 z-0 object-contain w-52 h-1/5">
        <p class="absolute top-0 left-0 w-full">裏</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.flip-enter-active, .flip-leave-active {
  transition: transform 0.3s;
}

.flip-enter-from {
  transform: rotateY(90deg);
}

.flip-leave-to {
  transform: rotateY(90deg);
}
</style>