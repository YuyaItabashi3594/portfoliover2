<script setup>
const { data, pending, error, refresh } = await useFetch('https://zenn.dev/api/articles?username=nemunyan')

const articles = data.value.articles.slice(0, 3)

console.log(articles)

</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 mx-6">
    <p class="text-4xl">nemunyan's room</p>
    <p>フロントエンドメインのエンジニアとして活動しています</p>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="border border-sky-600 p-2 rounded-lg bg-zinc-900 mt-4">
      <p class="text-center text-lg">得意なもの</p>
      <div class="flex mt-4 gap-2">
        <Logo :language="'vue'" :url="'https://ja.vuejs.org/'" />
        <Logo :language="'nuxtjs'" :url="'https://nuxt.com/'" />
        <Logo :language="'jetstream'" :url="'https://jetstream.laravel.com/'" />
        <Logo :language="'javascript'" :url="'https://developer.mozilla.org/ja/docs/Web/JavaScript'" />
        <Logo :language="'tailwindcss'" :url="'https://tailwindcss.com/'" />
      </div>
    </div>
    <div class="border border-sky-600 p-2 rounded-lg bg-zinc-900 mt-4">
      <p class="text-center text-lg">学習中のもの</p>
      <div class="flex mt-4 gap-2">
        <Logo :language="'react'" :url="'https://ja.react.dev/'" />
        <Logo :language="'nextjs'" :url="'https://nextjs.org/'" />
        <Logo :language="'python'" :url="'https://www.python.org/'" />
        <Logo :language="'django'" :url="'https://www.djangoproject.com/'" />
        <Logo :language="'laravel'" :url="'https://laravel.com/'" />
      </div>
    </div>
    <div class="flex flex-col md:flex-row mt-6">
      <div class="border rounded-md mx-4 bg-zinc-900">
        <div class="flex items-center px-2 pt-2">
          <img src="/zenn.png" class="w-6 h-6">
          <p class="text-lg">最新投稿</p>
        </div>
        <div v-for="article in articles" :key="article.id" class="w-full md:w-1/3 mt-4 ">
          <ArticleCard :article="article" />
        </div>
      </div>
    </div>
  </div>
  <NuxtWelcome />
</template>
