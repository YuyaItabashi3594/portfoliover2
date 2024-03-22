<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<template>
  <Transition name="loading">
    <div v-if="loading" class="fixed inset-0 flex items-center justify-center z-50 w-full h-full bg-black">
      Loading
    </div>
  </Transition>
  <div class="min-h-screen flex flex-col">
    <div class="mb-10">
      <div v-if="$device.isMobile">
        <NavbarMobile />
        <div class="mt-10">
          <slot />
        </div>
      </div>
      <div v-else>
        <NavbarDesktop />
        <slot />
      </div>
    </div>
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>

<style>
body {
  background-color: black;
  color: white;
}

.loading-leave-active {
  transition: opacity 1.0s ease;
}

.loading-leave-to {
  opacity: 0;
}
</style>