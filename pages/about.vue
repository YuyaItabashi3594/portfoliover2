<script setup>

const histories = [
  {
    date: '1996年',
    img: '/about/born.png',
    title: '誕生',
    description: '茨城県つくば市で生まれました。泣かなかったそうです。'
  },
  {
    date: '2015年',
    img: '/about/clark.jpg',
    title: 'クラーク記念国際高等学校卒業',
    description: 'クラーク全国初の東北大学合格でした。'
  },
  {
    date: '2022年',
    img: '/about/tohokuuniversity.jpg',
    title: '東北大学経済学研究科修士課程修了',
    description: '専攻は経営組織論です。'
  },
  {
    date: '現在',
    img: '',
    title: 'フロントエンドエンジニア',
    description: '3社ほどを通じて働いてきました。これまでの経験から，次はサービスに責任をもって取り組める仕事に就けるように努力しています。'
  }
]

const favorites = [
  {
    title: 'beatmania IIDX',
    img: '/about/iidxlm.jpg',
    description: '高校一年の頃からずっとプレイしているアーケードの音楽ゲームです。'
  }
]

</script>

<template>
  <div class="flex flex-col xl:flex-row items-center justify-center">
    <div class="flex flex-col items-center justify-center px-4 mt-4">
      <div class="text-2xl">History</div>
      <div class="flex flex-col">
        <div class="relative border-s border-zinc-700" v-for="data in histories">
          <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-zinc-900 bg-zinc-700"></div>
          <time class="ml-4 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ data.date
            }}</time>
          <HistoryCard :data="data" />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center px-4 mt-4">
      <div class="text-2xl">Favorite Things(クリックで裏返す)</div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <FavoriteCard v-for="data in favorites" :data=data />
      </div>
    </div>
  </div>
</template>