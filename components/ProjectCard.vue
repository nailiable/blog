<script setup lang="ts">
const props = defineProps<{
  title?: string
  desc?: string
  icon?: string
  _path?: string
}>()
console.log(props.icon)

const router = useRouter()

const handleClick = () => {
  if (props._path) router.push(props._path)
}
</script>

<template>
  <div class="cursor-pointer rounded-md hover:bg-#ffffff13 transition-duration-200 pt5 pb5 pl4 hover:backdrop-blur-1" @click="handleClick">
    <div class="flex items-center mb-3 gap-2">
      <div class="rounded-md float-left">
        <div :class="`${icon} text-size-7`" />
      </div>
      <h3 class="m0">{{ title }}</h3>
    </div>
    <div>{{ desc }}</div>
  </div>
</template>