<script setup>

const {data, pending, error, refresh} = await useFetch('https://zenn.dev/api/articles?username=nemunyan')

const articles = data.value.articles

</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 mx-6">
    <p class="text-4xl">nemunyan's room</p>
    <p>フロントエンドメインのエンジニアとして活動しています</p>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="border border-sky-600 p-2 rounded-lg bg-zinc-900 mt-4">
      <p class="text-center text-lg">得意な言語/FW</p>
      <div class="flex mt-4 gap-2">
        <Logo :language="'vue'" :url="'https://ja.vuejs.org/'" />
        <Logo :language="'nuxtjs'" :url="'https://nuxt.com/'" />
        <Logo :language="'jetstream'" :url="'https://jetstream.laravel.com/'" />
        <Logo :language="'javascript'" :url="'https://developer.mozilla.org/ja/docs/Web/JavaScript'" />
        <Logo :language="'tailwindcss'" :url="'https://tailwindcss.com/'" />
      </div>
    </div>
    <div class="border border-sky-600 p-2 rounded-lg bg-zinc-900 mt-4">
      <p class="text-center text-lg">学習中の言語/FW</p>
      <div class="flex mt-4 gap-2">
        <Logo :language="'react'" :url="'https://ja.react.dev/'" />
        <Logo :language="'nextjs'" :url="'https://nextjs.org/'" />
        <Logo :language="'python'" :url="'https://www.python.org/'" />
        <Logo :language="'django'" :url="'https://www.djangoproject.com/'" />
        <Logo :language="'laravel'" :url="'https://laravel.com/'" />
      </div>
    </div>
  </div>
  <NuxtWelcome />
</template>
