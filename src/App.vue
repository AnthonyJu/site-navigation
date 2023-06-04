<template>
  <RouterView />
</template>

<script setup lang="ts">
// https://github.com/vueuse/head
useHead({
  title: 'Ju Peng\'s Mini Site',
  meta: [
    { name: 'description', content: 'Ju Peng\'s Mini Site' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#121213' : '#ffffff',
    },
  ],
})
</script>
