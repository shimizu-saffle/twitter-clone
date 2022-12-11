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

    <div class="mt-2 space-y-3">
      <SidebarLeftTab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name> Home </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name> Explore </template>
      </SidebarLeftTab>

      <SidebarLeftTab active>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name> Bookmark </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>

<script setup>
import { HashtagIcon, HomeIcon, InboxIcon } from '@heroicons/vue/solid';
const { defaultTransition } = useTailwindConfig();
</script>
