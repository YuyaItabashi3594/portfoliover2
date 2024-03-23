<script setup>
import VueMarkdown from 'vue-markdown-render'

const props = defineProps({
  data: Object
})

const isModalOpen = ref(false)
const markdownContent = ref('')

watch(isModalOpen, () => {
  console.log(isModalOpen.value)
  if (isModalOpen.value === true) {
    console.log('fetch')
    fetch(`/workdocs/${props.data.doc}.md`)
      .then(response => response.text())
      .then(data => {
        markdownContent.value = data
      })
      .catch(error => {
        console.error(error);
      });
  }
})

const changeModalOpen = () => {
  isModalOpen.value = !isModalOpen.value
}

</script>

<template>
  <div class="max-w-2xl mt-4">
    <div class="relative flex flex-col ms-2 mb-4 md:mb-10">
      <NuxtLink :to="props.data.url">
        <div class="w-[350px] md:w-[600px] hover:scale-x-110 hover:scale-y-105 duration-200">
          <img v-if="props.data.img" :src="props.data.img" :alt="`${props.data.title}の画像`" class="opacity-50">
          <div class="z-10 absolute -translate-x-1/2 -translate-y-1/2 top-[45%] md:top-1/2 left-1/2">
            <p class="text-2xl leading-tight font-medium">{{ props.data.title }}</p>
          </div>
        </div>
      </NuxtLink>
      <div class="ml-auto mr-0 mt-2">
        <button @click="changeModalOpen()" class="text-xl">
          Read Info →
        </button>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <div v-if="isModalOpen" @click="changeModalOpen()"
      class="fixed top-0 left-0 w-full h-full bg-zinc-900 z-10 opacity-30"></div>
    <Transition name="appear">
      <div v-if="isModalOpen"
        class="fixed origin-top-left -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-zinc-700 p-6 rounded-md z-20 max-h-[75%] overflow-y-auto">
        <p class="text-2xl border-b pb-4">{{ props.data.title }}</p>
        <div class="markdown">
          <vue-markdown :source="markdownContent"></vue-markdown>
        </div>
        <button class="mt-4 text-xl hover:bg-zinc-500 duration-150 p-1 rounded" @click="changeModalOpen()">閉じる</button>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.appear-enter-active {
  animation: bounce-in 0.4s;
}

.appear-leave-active {
  animation: bounce-in 0.4s reverse;
}

@keyframes bounce-in {
  0% {
    scale:0;
  }
  100% {
    scale:1;
  }
}

.markdown h1 {
  font-size: 2em;
}

.markdown h2 {
  font-size: 1.5em;
  margin-top: 0.5em;
  padding-top: 0.5em;
}

.markdown h3 {
  font-size: 1.17em;
}

.markdown h4 {
  font-size: 1em;
}

.markdown h5 {
  font-size: 0.83em;
}

.markdown h6 {
  font-size: 0.67em;
}

.markdown p {
  font-size: 1em;
}

.markdown a[href*="http"] {
  color: #0070f3;
  text-decoration: none;
  border-bottom: 1px solid #0070f3;
}

.markdown li::before {
  content: "- "
}
</style>