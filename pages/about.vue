<template>
  <main class="prose">
    <ContentDoc />
  </main>
</template>

<script setup>
  useHead({
    htmlAttrs: {
      class: 'dark'
    }
  })
  
  definePageMeta({
    layout: 'landing'
  })
  </script>
