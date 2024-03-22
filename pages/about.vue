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
    title: 'フロントエンドエンジニア',
    description: '3社ほどを通じて働いてきました。これまでの経験から，次はサービスに責任をもって取り組める仕事に就けるように努力しています。'
  }
]

const favorites = [
  {
    title: 'beatmania IIDX',
    img: '/about/iidxlm.jpg',
    description: '高校一年の頃からずっとプレイしている，ゲーセンにある音楽ゲームです。ダプルプレーをメインで遊んでいて，腕前はDP皆伝，穴クエテレポハード，アリーナA1到達くらいです。'
  },
  {
    title: '英傑大戦',
    img: '/about/eiketsu.jpg',
    description: 'ゲーセンにあるアクション性の高いTCGです。2022年4月に始めましたが，他のプレイヤーの大多数が前作以前から遊んでいる10年戦士なので，如何に早く上達し，追い付き追い越していけるかという部分に面白みを感じています。'
  },
  {
    title: 'インディーゲーム',
    img: '/about/aspacefortheunbound.jpg',
    img2: '/about/babelguidebook.png',
    description: '製作者が自由にやりたいことを表現しているインディーゲームがお気に入りです。表面は「A Space for the Unbound」，裏面は「バベル号ガイドブック」です。'
  }
]

const policies = [
  {
    title: 'Mistakes are Opportunities',
    img: '/about/reignover.png',
    description: 'Playmaker: Catalyst - Reignover という動画の中で使われているフレーズ。「失敗は成功の基」よりも上位の概念で，自分ではなくチームメイトの失敗について，そこから学ぶ以上にそれを活用するというニュアンスがある。'
  },
  {
    title: '一生をモラトリアムとして生きる',
    img: '/about/モラトリアム.jpg',
    description: '山形大学の大学院受験の際に使った本の前書きに書いてあったフレーズです。大人としての責任や仕事をこなしながらも，決して形を固定せず，不安定な状態のまま生き続けるというプロフェッショナルの神髄を的確に示している。'
  }
]

</script>

<template>
  <div class="flex flex-col lg:flex-row items-start justify-center">
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
      <div class="text-2xl mb-4">{{`Favorite Things(${$device.isMobile?'タップして':'クリックして'}裏返す)`}}</div>
      <div class="grid grid-cols-1 min-[1200px]:grid-cols-2 2xl:grid-cols-3 gap-2">
        <FlipCard v-for="data in favorites" :data=data />
      </div>
      <div class="text-2xl my-4">{{`My Policies(${$device.isMobile?'タップして':'クリックして'}裏返す)`}}</div>
      <div class="grid grid-cols-1 min-[1200px]:grid-cols-2 2xl:grid-cols-3 gap-2">
        <FlipCard v-for="data in policies" :data=data />
      </div>
    </div>
  </div>
</template>