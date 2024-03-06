<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const data = await useFetch('/api/zenn')
const articles = data.data.value.articles.slice(0, 3)

const query: QueryBuilderParams = { path: '/blog', limit: 3, sort: [{ date: -1 }] }

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
      <div class="border rounded-md bg-zinc-900 max-w-[800px] px-4">
        <div class="relative flex items-center justify-center mt-4 min-w-40">
          <img src="/zenn.png" class="w-6 h-6">
          <p class="text-lg">最新投稿</p>
          <NuxtLink to="https://zenn.dev/nemunyan">
            <p class="absolute right-0 top-0 hover:bg-zinc-600 duration-150">more→</p>
          </NuxtLink>
        </div>
        <div v-for="article in articles" :key="article.id" class="mt-2">
          <ArticleCard :article="article" />
        </div>
        <div class="mb-2"></div>
      </div>
      <div class="border rounded-md bg-zinc-900 max-w-[800px] px-4 mt-2 md:mt-0">
        <div class="relative flex items-center justify-center mt-4 min-w-40">
          <p class="text-lg">新着記事</p>
          <NuxtLink to="/blog">
            <p class="absolute right-0 top-0 hover:bg-zinc-600 duration-150">more→</p>
          </NuxtLink>
        </div>
        <ContentList path="/blog" v-slot="{ list }">
          <article v-for="page in list" :key="page._path" class="mt-2 min-w-80">
            <BlogCard :blog="page" />
          </article>
        </ContentList>
      </div>
    </div>
  </div>
  <NuxtWelcome />
</template>
