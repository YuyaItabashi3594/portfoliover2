<script setup>

const developments = [
  {
    title: 'Warframe Custom Tracker',
    img: '/workimg/warframecustomtracker.png',
    doc: 'warframecustomtracker',
    url: 'https://www.warframecustomtracker.site/'
  }
]

</script>

<template>
  <div class="flex flex-col lg:items-row items-start justify-center">
    <div class="flex flex-col items-center justify-center mx-auto">
      <p class="text-2xl">My Web Developments</p>
      <WorkCard v-for="development in developments" :key="development.title" :data="development" />
    </div>
  </div>
</template>