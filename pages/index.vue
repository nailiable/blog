<script setup lang="ts">
const bgColor = inject < Ref < { hour: number, minute: number, second: number } >> ('bgColor')
const projectList = await queryContent('/projects').find()
</script>

<template>
  <div class="flex flex-col mt-10 mx-3 md:mx-30 md:mt-30">
    <div class="flex justify-between md:items-center flex-col md:flex-row">
      <div class="flex flex-col">
        <div class="flex items-center gap1">
          <h1 class="mb-0">
            你好
          </h1>
          <h1 class="i-ph-hand-waving-duotone mb-0 hover:transform-rotate-13 transition-duration-100 active:transform-scale-80" />
          <h1 class="mb-0">文博知浅</h1>
        </div>
        <h2 contenteditable autofocus class="mt-3 text-#aaa hover:text-#ddd float-left cursor-text outline-none w-250px mb-2">
          无聊，偶尔写点博客。
        </h2>
      </div>

      <div class="mb-10 md:mb-0">登峰造极，文博知浅。</div>
    </div>

    <div class="flex items-center gap-3 justify-between">
      <div class="flex items-center gap-1">
        <div class="i-ph-clock-duotone" />
        {{ bgColor?.hour.toString().padStart(2, '0') }}:{{ bgColor?.minute.toString().padStart(2, '0') }}:{{ bgColor?.second.toString().padStart(2, '0') }}
      </div>
      <div class="text-#888 font-italic flex items-center gap-1">
        时间の色 RGB {{ bgColor?.hour }},{{ bgColor?.minute }},{{ bgColor?.second }}
        <div class="i-ph-paint-roller-duotone" />
      </div>
    </div>
    <hr class="w-full">
    <div>这里是Naily的博客，静修养身之地。</div>

    <h2 class="category_title text-size-7xl md:text-size-8xl">
      Projects
    </h2>
    <div class="relative top--30">
      <ProjectCard v-for="(item, index) in projectList" :key="index" v-bind="item" />
    </div>
  </div>
</template>

<style scoped>
.category_title {
  -webkit-text-stroke-color: #555;
  -webkit-text-stroke-width: 1px;
  color: transparent;
  margin-top: 1.25rem;
  pointer-events: none;
  text-wrap: nowrap;
}

</style>
