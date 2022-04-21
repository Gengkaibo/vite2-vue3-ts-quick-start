<script setup lang="ts">
import { keepAliveNames } from '@/router/menuRecordConfig'
defineOptions({
  name: 'CommonContainer',
})
</script>
<template>
  <router-view
    v-slot="{ Component }"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <keep-alive :include="keepAliveNames">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<style lang="less" scoped></style>
