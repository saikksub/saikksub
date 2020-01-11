<template>
  <div class="page">
    <p class="text-gray-600 text-xs px-2">
      What's New?
    </p>
    <template v-for="(item, index) in feed">
      <div
        :key="`page-whatsnew-feed-item-${index}`"
        :article-id="item.id"
        class="feed-item bg-transparent px-2 py-4 rounded"
      >
        <h1
          v-text="item.title"
          @click="openArticle"
          class="text-xl md:text-2xl lg:text-4xl xl:text-4xl hover:text-green-600 cursor-pointer"
        />
        <div class="flex h-10 items-center">
          <img
            class="rounded-full my-2"
            src="https://en.gravatar.com/avatar/74de62a2ed22b805fca37378d24ce921?s=20"
          />
          <p class="text-xs mx-2 text-gray-700">
            Kiran Sai K
          </p>
          <p class="text-xs mx-2 text-gray-700">
            11-Jan-2020
          </p>
        </div>
        <p
          v-text="item.description"
          class="text-base lg:text-md xl:text-md text-gray-600"
        />
        <button class="text-green-600 text-xs mt-2">Read more</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feed: [
        {
          id: 'xyz-123',
          title: 'Implement pagination using firebase firestore',
          description:
            'Recently, i have worked on a firebase web application which required to implement pagination for list of documents. '
        }
      ]
    }
  },
  methods: {
    openArticle(e) {
      const articleId = e.target.parentNode.getAttribute('article-id')
      if (articleId) {
        this.$router.push({
          path: '/article',
          query: { id: articleId }
        })
      }
    }
  }
}
</script>
