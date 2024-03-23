<template>
  <main>
    <div class="flex flex-col markdown">
      <ContentDoc v-slot="{ doc }">
        <div class="flex flex-col pb-2 mb-2 border-b">
          <p>{{ useDateFormat(doc.date,'YYYY年MM月DD日') }}</p>
          <h1 class="">{{ doc.title }}</h1>
        </div>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </div>
  </main>
</template>

<style scoped>
.markdown h1 {
  font-size: 2em;
}

.markdown h2 {
  font-size: 1.5em;
  margin-top: 0.5em;
  padding-top: 0.5em;
  border-top: 1px solid #eaecef;
}

.markdown h3 {
  font-size: 1.17em;
}

.markdown h4 {
  font-size: 1em;
}

.markdown h5 {
  font-size: 0.83em;
}

.markdown h6 {
  font-size: 0.67em;
}

.markdown p {
  font-size: 1em;
}

.markdown a[href*="http"] {
  color: #0070f3;
  text-decoration: none;
  border-bottom: 1px solid #0070f3;
}
</style>