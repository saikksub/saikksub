<template>
  <div class="h-10 flex items-center border-b">
    <p class="font-semibold font-poppins text-sm">Kiran Sai Subramanyam K</p>

    <div class="grow" />

    <ul class="flex items-center gap-3">
      <li
        v-for="item in menu"
        :key="item.id"
        :class="[
          routePath === item.url ? 'font-semibold' : 'font-normal',
          'text-sm',
        ]"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const menu = [
  { id: "header-nav-menu-item-about", text: "About", url: "/about" },
  {
    id: "header-nav-menu-item-about",
    text: "GitHub",
    url: "https://github.com/saikksub",
  },
  {
    id: "header-nav-menu-item-about",
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/saikksub/",
  },
  {
    id: "header-nav-menu-item-about",
    text: "Twitter",
    url: "https://twitter.com/saikksub",
  },
];

const routePath = ref("/");

watchEffect(() => {
  routePath.value = useRoute().path;
});
</script>
