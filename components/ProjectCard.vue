<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  icon: string
}>()
</script>

<template>
  <div class="cursor-pointer rounded-md hover:bg-#ffffff13 transition-duration-200 pt5 pb5 pl2">
    <div class="flex items-center mb-3 gap-2">
      <div class="rounded-md float-left">
        <div :class="`${icon} text-size-7`" />
      </div>
      <h3 class="m0">{{ title }}</h3>
    </div>
    <div>{{ desc }}</div>
  </div>
</template>