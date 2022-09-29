<template>
  <div></div>
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

onMounted(() => {
  setTimeout(() => {
    useRouter().push({ path: '/about' })
  }, 800)
})
</script>
