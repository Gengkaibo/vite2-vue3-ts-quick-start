<script setup lang="ts">
import { goPath } from '@/router/utils'
import logoLight from '@/assets/images/logo-light.png'
import logoDark from '@/assets/images/logo-dark.png'
import TheSideMenuDrawer from './TheSideMenuDrawer.vue'
defineOptions({
  name: 'TheLogo',
})
const props = defineProps({
  width: {
    type: String,
    default: () => {
      return '220px'
    }
  },
})
const layoutStore = useLayoutStore()
// 跳转到首页
const goPortal = () => {
  goPath('/MyPortal')
}
// 是否显示菜单抽屉
const isShowSideDrawer = ref(false)
const changeDrawerVisible = () => {
  isShowSideDrawer.value = !isShowSideDrawer.value
}
</script>
<template>
  <span
    v-show="layoutStore.isMobile"
    title="菜单"
    class="iconfont icon-row"
    @click.prevent="changeDrawerVisible"
  ></span>
  <div
    v-show="!layoutStore.isMobile"
    class="header-left"
    :style="{
      width: props.width
    }"
  >
    <img
      v-show="layoutStore.isDark"
      class="logo"
      :src="logoDark"
      alt="logo"
      @click="goPortal"
    />
    <img
      v-show="!layoutStore.isDark"
      class="logo"
      :src="logoLight"
      alt="logo"
      @click="goPortal"
    />
  </div>
  <TheSideMenuDrawer
    :is-visible="isShowSideDrawer"
    @change-visible="changeDrawerVisible"
  ></TheSideMenuDrawer>
</template>

<style lang="less" scoped>
.header-left {
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
