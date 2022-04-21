<template>
  <el-config-provider size="small">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { initApp } from '@/hooks/initApp'

initApp()

useHead({
  title: import.meta.env.VITE_APP_TITLE
    ? import.meta.env.VITE_APP_TITLE.toString()
    : 'My-App',
  meta: [
    {
      name: 'keywords',
      content: 'vite,vue,markdown,typescript,element-plus,vite-vue-ts-quick-start',
    },
    {
      name: 'description',
      content:
        '这是一个vite-vue-ts-quick-start项目，目的是为了让开发人员快速搭建并开始项目开发。',
    },
    {
      name: 'author',
      content: '@沉淀',
    },
  ],
})
</script>
