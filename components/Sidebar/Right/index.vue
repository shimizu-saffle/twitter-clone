<template>
  <div class="flex flex-col">
    <!-- Preview Card : What's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHappening.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Preview Card : Who to follow -->
    <SidebarRightPreviewCard title="Who to follow" />
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  { title: 'SpaceX', count: '18.8k Tweets' },
  { title: '#CodingIsFun', count: '8.8k Tweets' },
  { title: '#artforall', count: '18.8k Tweets' },
]);
</script>
