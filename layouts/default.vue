<script setup>
</script>

<template>
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
</style>