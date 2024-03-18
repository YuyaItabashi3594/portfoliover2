<script setup>

const histories = [
  {
    date:'1996年',
    img: '/about/born.png',
    title: '誕生',
    description: '茨城県つくば市で生まれました。泣かなかったそうです。'
  },
  {
    date:'2015年',
    img: '/about/clark.jpg',
    title: 'クラーク記念国際高等学校卒業',
    description: 'クラーク全国初の東北大学合格でした。'
  }
]

</script>

<template>
  <div class="flex items-center justify-center">
    <div class="text-2xl">History</div>
  </div>
  <div class="flex items-center justify-center px-4 mt-4">
    <div class="flex flex-col">
      <div class="relative border-s border-zinc-700" v-for="data in histories">
        <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-zinc-900 bg-zinc-700"></div>
        <time class="ml-4 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ data.date }}</time>
        <HistoryCard :data="data" />
      </div>
    </div>
  </div>


</template>