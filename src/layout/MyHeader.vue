<script setup lang="ts">
import MenuTopOnly from './MenuTopOnly.vue'
import MenuTopWithAside from './MenuTopWithAside.vue'
import MenuTopNoNav from './MenuTopNoNav.vue'

import TheTopRight from './TheTopRight.vue'
import TheLogo from './TheLogo.vue'
defineOptions({
  name: 'MyHeader',
})
const store = useLayoutStore()


</script>
<template>
  <el-header>
    <TheLogo :width="'220px'" />
    <MenuTopWithAside
      v-if="store.layoutType == 'TopLeft' && !store.isMobile"
      :width="'calc(100% - 200px - 260px)'"
    ></MenuTopWithAside>
    <MenuTopOnly
      v-if="store.layoutType == 'Top' && !store.isMobile"
      :width="'calc(100% - 200px - 260px)'"
    ></MenuTopOnly>
    <MenuTopNoNav
      v-if="store.layoutType == 'Left' || store.isMobile"
      :width="'calc(100% - 200px - 260px)'"
    ></MenuTopNoNav>

    <TheTopRight :width="'260px'" />
  </el-header>
</template>

<style lang="less" scoped>
</style>
