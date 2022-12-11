<template>
  <div
    class="p-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-350"
    :class="wrapperClasses"
  >
    Item
  </div>
</template>

<script setup>
const { defaultTransition, twittersBorderColor } = useTailwindConfig();
const wrapperClasses = computed(
  () => `${defaultTransition} ${twittersBorderColor}`
);
</script>
