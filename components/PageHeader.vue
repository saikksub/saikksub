<template>
  <div
    class="fixed top-0 right-0 left-0 flex h-12 bg-white items-center border-b border-gray-200 px-2 md:px-5 lg:px-10 xl:px-15 z-50"
  >
    <nuxt-link class="flex h-full items-center" to="/">
      <img
        class="rounded-full"
        src="https://www.gravatar.com/avatar/74de62a2ed22b805fca37378d24ce921?s=32"
      />
      <p class="text-lg mx-2 text-black font-bold">@saikksub</p>
    </nuxt-link>
    <div class="flex-grow" />
    <div class="flex h-full items-center">
      <a
        href="https://join.skype.com/invite/e2525WipITkz"
        target="__blank"
        class="mx-2"
      >
        <img
          class="w-4 h-auto"
          src="@/assets/vector/icons-svg/social/skype.svg"
        />
      </a>
      <a href="https://github.com/saikksub" target="__blank" class="mx-2">
        <img
          class="w-4 h-auto"
          src="@/assets/vector/icons-svg/social/github.svg"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/saikksub"
        target="__blank"
        class="mx-2"
      >
        <img
          class="w-4 h-auto"
          src="@/assets/vector/icons-svg/social/linkedin.svg"
        />
      </a>
      <a href="https://twitter.com/saikksub" class="mx-2">
        <img
          class="w-4 h-auto"
          src="@/assets/vector/icons-svg/social/twitter.svg"
        />
      </a>
    </div>
  </div>
</template>
