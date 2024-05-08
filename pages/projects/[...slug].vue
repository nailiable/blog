<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';

interface Meta {
  title?: string
}

const route = useRoute()
const router = useRouter()
const contentMeta = await queryContent<Meta & ParsedContent>().where({
  _path: route.path
}).findOne()
</script>

<template>
  <div class="pt-5 mx-5 md:mx-30 md:pt-30 lg:mx-50 xl:mx-60">
    <h1 class="post_title right-0 text-size-5xl md:text-size-8xl m0 fixed z--1">{{ contentMeta.title }}</h1>
    <div class="mx5 mb5 h-4">
      <div class="i-ph-house-duotone text-size-2xl hover:transform-scale-80 active:transform-scale-65 transition-duration-100 cursor-pointer" @click="router.push('/')" />
    </div>
    <div id="nai-project-content" class="flex flex-col md:border-color-#555 rounded-2xl md:border-solid md:border-1 md:px10 md:py10">
      <ContentDoc />
    </div>
  </div>
</template>

<style scoped>
.post_title {
  -webkit-text-stroke-color: #333;
  -webkit-text-stroke-width: 1px;
  color: transparent;
  pointer-events: none;
  text-wrap: nowrap;
}
</style>