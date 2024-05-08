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
    <Suspense>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Suspense>
  </div>
</template>

<style lang="less">
* {
  transition: ease-in-out 1s;
  font-family: Inter var experimental,Inter var,Inter,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji !important;
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

img {
  width: 100%;
}

#nai-project-content {
  img {
    border-radius: 14px;
  }

  img:hover {
    border-radius: 3px;
  }

  h1, h1 a, h2, h2 a, h3, h3 a, h4, h4 a, h5, h5 a, h6, h6 a {
    color: white;
  }

  h3::before, h4::before, h5::before, h6::before {
    content: '# ';
    color: #aaa;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
  }

  blockquote {
    padding-left: 1em;
    margin-left: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-right: 1em;
    background-color: #44444470;
    border-radius: 14px;
    animation: blockquoteIn 0.5s;
    margin-right: 1em;
  }

  @keyframes blockquoteIn {
    from {
      opacity: 0;
      transform: translateX(-10%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  code, kbd, pre, samp {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace !important;
  }

  code {
    border: 1px solid #444;
    background-color: #0F172A;
    font-weight: 600;
    padding: 0 .375rem;
    border-radius: 5px;
    font-size: .875em;
    margin: 0 .2rem;
  }

  pre.shiki {
    code {
      border: none;
      background-color: transparent;
      margin: 0;
      padding: 0;
    }
    border: 1px solid #444;
    margin: 1em 0;
    border-radius: 5px;
    padding: .5em 1em;
    font-weight: 400;
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace !important;
  }
}
</style>
