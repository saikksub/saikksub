<template>
  <div>
    <ContentDoc :path="useRoute().path">
      <template #empty>
        <div class="flex items-center justify-center h-[80vh]">
          <div class="space-y-6">
            <img class="w-auto h-64" src="/no_data.svg" />
            <p class="text-center text-2xl font-semibold">Article is empty!</p>
            <p class="text-center">
              It looks like the author is busy! Come back later.
            </p>
            <div>
              <nuxt-link to="/">
                <button
                  class="px-6 py-2 border rounded-md border-gray-400 block mx-auto hover:border-gray-800 hover:bg-gray-800 hover:text-white"
                >
                  Go to Home page
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </template>

      <template #not-found>
        <div class="flex items-center justify-center h-[80vh]">
          <div class="space-y-6">
            <img class="w-auto h-64" src="/into_the_night.svg" />
            <p class="text-center text-2xl font-semibold">Article not found!</p>
            <p class="text-center">
              The page you are looking for does not exist.
            </p>
            <div>
              <nuxt-link to="/">
                <button
                  class="px-6 py-2 border rounded-md border-gray-400 block mx-auto hover:border-gray-800 hover:bg-gray-800 hover:text-white"
                >
                  Go to Home page
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "xplore",
});
</script>