<template>
  <div>
    <div class="py-[120px] flex items-center justify-center">
      <div>
        <div class="flex justify-center">
          <img
            class="inline-block h-48 w-48 rounded-full block mx-auto"
            src="https://avatars.githubusercontent.com/u/35134207?v=4"
            alt="Kiran Sai Subramanyam K"
          />
        </div>

        <p class="text-center font-meidum text-2xl mt-6 text-black dark:text-white">
          Kiran Sai Subramanyam K
        </p>
        <p class="text-center font-meidum text-2xl mt-6 text-gray-600 dark:text-gray-400">
          Full-Stack Freelancer Software Developer &amp;<br>
          <span class="text-lg">Managing Director of Xplorebits Technologies</span>
        </p>

        <p class="text-center font-base text-base mt-6 text-gray-600 dark:text-gray-400">
          I love ❤️ JavaScript and drinking ☕ Coffee
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: 'h-full bg-white dark:bg-black'
  }
})

definePageMeta({
  layout: 'landing'
})
</script>
