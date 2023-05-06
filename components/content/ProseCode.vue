<script lang="ts">
import { defineComponent } from "#imports";
export default defineComponent({
  props: {
    code: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
});
</script>

<template>
  <div class="p-4 bg-gray-900 rounded-lg text-sm mb-4">
    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>