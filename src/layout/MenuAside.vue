<script setup lang="ts">
import MenuAsideTree from './MenuAsideTree.vue'
defineOptions({
  name: 'MenuAside',
})
const menuStore = useMenuStore()

const isCollapse = menuStore.isCollapse
</script>
<template>
  <el-aside>
    <el-menu
      :default-active="menuStore.getActiveIndex"
      :collapse="isCollapse"
      class="kb_menu-vertical"
    >
      <MenuAsideTree :tree-data="menuStore.asideMenu"></MenuAsideTree>
    </el-menu>
  </el-aside>
</template>
<style lang="less">
.kb_menu-vertical {
  border: transparent !important;
  background: transparent !important;
  height: 100%;
}
.kb_menu-vertical .kb_menu-icon {
  margin-right: 2px;
  font-size: 20px;
  width: 40px;
  text-align: center;
}
.kb_menu-vertical .kb_menu-image {
  margin-right: 2px;
  width: 40px;
}
// 颜色
.kb_menu-vertical .el-menu-item {
  color: var(--el-menu-text-color);
}
.kb_menu-vertical .el-menu-item:hover {
  color: var(--el-menu-active-color);
}
.kb_menu-vertical .el-menu-item.is-active {
  color: var(--el-menu-active-color);
}
.kb_menu-vertical .el-menu-item.un-active {
  color: var(--el-menu-text-color) !important;
}
.el-sub-menu .el-menu {
  background-color: var(--kb-custom-bg-color-current);
}
.kb_menu-vertical .el-menu-item::after {
  height: 0px;
  width: 2px;
  position: absolute;
  right: 0;
  top: 0;
  content: "";
  background-color: var(--el-menu-active-color);
}
.kb_menu-vertical .el-menu-item.is-active::after {
  height: 100%;
}
.kb_menu-vertical .el-menu-item:hover::after {
  height: 100%;
  transition: height 0.3s;
}
</style>
