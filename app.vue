<script setup lang="ts">
const bgColor = ref({
  second: new Date().getSeconds(),
  minute: new Date().getMinutes(),
  hour: new Date().getHours(),
})
provide('bgColor', bgColor)

let bgInterval: NodeJS.Timeout | null = null

onMounted(() => {
  bgInterval = setInterval(() => {
    const date = new Date()
    bgColor.value.second = date.getSeconds()
    bgColor.value.minute = date.getMinutes()
    bgColor.value.hour = date.getHours()
    const color = `rgb(${bgColor.value.hour}, ${bgColor.value.minute}, ${bgColor.value.second})`
    document.body.style.backgroundColor = color
  }, 1000)
})

onBeforeUnmount(() => clearInterval(bgInterval!))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="less">
* {
  transition: ease-in-out 1s;
  font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji,BlinkMacSystemFont,Helvetica Neue,Arial,PingFang SC,PingFang TC,PingFang HK,Microsoft Yahei,Microsoft JhengHei !important;
}

body {
  background-color: #111111;
  color: #ddd;
  padding: 0;
  margin: 0;
}

hr {
  border-color: #111;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
