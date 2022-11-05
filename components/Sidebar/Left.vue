<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 hover:bg-blue-50 hover:rounded-full w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig();
</script>
