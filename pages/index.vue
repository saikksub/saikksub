<template>
  <div>
    <div v-for="item in articles" class="border-b pb-6 border-gray-100">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-3">
          <div
            class="w-full h-full bg-no-repeat bg-center bg-cover"
            :style="{ 'background-image': `url(${item.imageUrl})` }"
          />
        </div>
        <div class="col-span-9 space-y-4">
          <nuxt-link :to="item._path">
            <h1 class="text-2xl font-bold">
              {{ item.title }}
            </h1>
          </nuxt-link>
          <p class="text-gray-500">
            {{ item.description }}
          </p>
          <p class="text-xs space-x-2">
            <span>
              {{ item.timeString }}
            </span>
            <span>
              <span class="text-black">By</span>
              <nuxt-link
                to="https://www.linkedin.com/in/saikksub/"
                class="text-xs text-blue-900"
              >
                Kiran Sai Subramanyam K
              </nuxt-link>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $dateTime } = useNuxtApp();

definePageMeta({
  layout: "xplore",
});

const articlesRow = ref([]);

const articles = computed(() => {
  return articlesRow.value.map((x) => ({
    ...x,
    timeString: $dateTime.fromMillis(x.timestamp).toFormat("MMM d, yyyy"),
  }));
});

onMounted(() => {
  queryContent("articles")
    .only(["title", "description", "timestamp", "_path", "imageUrl"])
    .sort({ timestamp: -1 })
    .limit(10)
    .find()
    .then((res) => {
      articlesRow.value = res;
    });
});
</script>
