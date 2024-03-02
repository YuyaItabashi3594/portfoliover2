<script setup>
</script>

<template>
  <div v-if="$device.isMobile">
    <NavbarMobile />
    <div class="mt-10">
      <slot />
    </div>
  </div>
  <div v-else>
    <h1>Desktop</h1>
    <slot />
  </div>
</template>

<style>
body {
  background-color: black;
  color: white;
}
</style>