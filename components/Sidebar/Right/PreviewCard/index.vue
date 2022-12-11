<template>
  <div
    class="m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-dim-700"
    :class="twittersBorderColor"
  >
    <h1
      class="p-3 text-xl font-extrabold text-gray-900 border-b dart:text-white"
    >
      {{ props.title }}
    </h1>

    <slot> </slot>

    <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100">
      Show more
    </div>
  </div>
</template>

<script setup>
const { twittersBorderColor } = useTailwindConfig();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
