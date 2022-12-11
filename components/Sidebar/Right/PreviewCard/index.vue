<template>
  <div
    class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700"
    :class="twittersBorderColor"
  >
    <h1 class="p-3">
      {{ props.title }}
    </h1>
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
