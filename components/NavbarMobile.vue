<template>
  <div class="flex items-center justify-center gap-2 sticky top-0 z-50 backdrop-blur-md">
    <NuxtLink to="/">
      <div class="text-center text-lg py-2 px-2 hover:bg-zinc-700 duration-150">
        Home
      </div>
    </NuxtLink>
    <NuxtLink to="/about">
      <div class="text-center text-lg py-2 px-2 hover:bg-zinc-700 duration-150">
        About
      </div>
    </NuxtLink>
    <NuxtLink to="/works">
      <div class="text-center text-lg py-2 px-2 hover:bg-zinc-700 duration-150">
        Works
      </div>
    </NuxtLink>
    <NuxtLink to="/blog">
      <div class="text-center text-lg py-2 px-2 hover:bg-zinc-700 duration-150">
        Blog
      </div>
    </NuxtLink>
  </div>
</template>