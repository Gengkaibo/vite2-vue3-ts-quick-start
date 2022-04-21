<script setup lang="ts">
import MenuTopTree from './MenuTopTree.vue'
defineOptions({
  name: 'MenuTopWithAside',
})

defineProps({
  width: {
    type: String,
    default: () => {
      return 'calc(100% - 200px - 260px)'
    },
  },
})

const menuStore = useMenuStore()
const { navRoutes } = storeToRefs(menuStore)
</script>
<template>
  <div
    class="header-middle"
    :style="{
      width: width,
    }"
  >
    <el-menu
      :default-active="menuStore.getActiveIndex"
      class="el-menu--horizontal"
      mode="horizontal"
    >
      <MenuTopTree
        :tree-data="navRoutes"
      ></MenuTopTree>
    </el-menu>
  </div>
</template>
<style lang="less">
.header-middle {
  height: 100%;
}

.header-middle .el-menu--horizontal {
  border: transparent;
  background: transparent !important;
  height: 100%;
}
.el-menu--horizontal .el-menu-item {
  width: 130px;
  height: 100%;
  padding: 0;
}
.el-menu--horizontal {
  border: unset !important;
}
.el-menu--horizontal .el-menu .el-menu-item {
  min-width: 200px;
  padding: 0;
}

.el-menu--horizontal .kb_menu-icon {
  margin-right: 2px;
  font-size: 20px;
  width: 40px;
  text-align: center;
}
.el-menu--horizontal .kb_menu-image {
  margin-right: 2px;
  width: 40px;
}
// 颜色
.el-menu--horizontal .el-menu-item {
  color: var(--el-menu-text-color) !important;
  border-bottom: 0px !important;
}
.el-menu--horizontal .el-menu-item:hover {
  color: var(--el-menu-active-color) !important;
}
.el-menu--horizontal .el-menu-item.is-active {
  color: var(--el-menu-active-color) !important;
}
.el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover {
  background-color: transparent !important;
}
.el-menu--popup {
  background-color: var(--kb-custom-bg-color-current) !important;
}
.el-menu--horizontal .el-menu .el-menu-item {
  background-color: var(--kb-custom-bg-color-current) !important;
}
.el-menu--horizontal .el-menu .el-sub-menu__title {
  background-color: var(--kb-custom-bg-color-current) !important;
}
.el-menu--horizontal .el-menu-item::before {
  height: 2px;
  width: 0px;
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  background-color: var(--el-menu-active-color);
}
.el-menu--horizontal .el-menu-item.is-active::before {
  width: 100%;
}
.el-menu--horizontal .el-menu-item:hover::before {
  width: 100%;
  transition: width 0.3s;
}
</style>
