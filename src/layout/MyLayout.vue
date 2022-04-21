<script setup lang="ts">
import MyCopyright from '@/components/common/MyCopyright.vue'
import MenuAside from './MenuAside.vue'
import MyHeader from './MyHeader.vue'
import { keepAliveNames } from '@/router/menuRecordConfig'
defineOptions({
  name: 'MyLayout',
})

const { showSideBar, showFooter } = storeToRefs(useLayoutStore())
</script>
<template>
  <el-container
    :class="{
      'kb_nav-container': true,
      'kb_hide-side': !showSideBar
    }"
  >
    <MyHeader></MyHeader>

    <MenuAside v-show="showSideBar"></MenuAside>
    <el-main>
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <keep-alive :include="keepAliveNames">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>

      <el-footer v-show="showFooter">
        <MyCopyright />
      </el-footer>
    </el-main>
  </el-container>
</template>

<style lang="less" scoped>
@import "@/styles/layout.less";
@import "@/styles/layout_mobile.less";
</style>
