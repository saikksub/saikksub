<template>
  <div>
    <div class="sidebar border border-r border-gray-300">
      <div class="text-center">
        <img
          class="rounded-full block my-5 mx-auto"
          src="https://en.gravatar.com/avatar/74de62a2ed22b805fca37378d24ce921?s=120"
        />
        <h1 class="text-md">
          Kiran Sai K
        </h1>
        <p class="text-sm text-gray-600">
          @saikksub
        </p>
      </div>
      <p class="text-sm my-5 mx-5 border-t border-b border-gray-300 py-5">
        I am a cross-platform application developer with 4+ years of experience
        in building desktop and web applications.
      </p>
      <ul class="list-none mx-5">
        <li class="my-2">What's New?</li>
        <li>Contact</li>
      </ul>
      <div
        class="absolute right-0 bottom-0 left-0 bg-white p-2 text-center text-xs text-gray-500"
      >
        &copy; 2020 saikksub. All rights reserved.
      </div>
    </div>
    <div class="content-view">
      <nuxt />
    </div>
  </div>
</template>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 35vh;
  background: white;
}
.content-view {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 35vh;
  background: white;
  padding: 15px 10px;
}
.content-view .page {
  width: auto;
  max-width: 980px;
  display: block;
  margin: auto;
}

button:active {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
}
</style>
