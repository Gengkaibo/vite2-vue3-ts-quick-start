<script setup lang="ts">
import MenuAsideTree from './MenuAsideTree.vue'
defineOptions({
  name: 'TheSideMenuDrawer',
})
defineProps({
  isVisible: {
    type: Boolean,
    default: () => {
      return false
    },
  },
})
const emit = defineEmits(['changeVisible'])
const handleClose = () => {
  emit('changeVisible')
}

const menuStore = useMenuStore()

</script>
<template>
  <el-drawer
    size="80%"
    :model-value="isVisible"
    direction="ltr"
    :lock-scroll="false"
    :before-close="handleClose"
  >
    <template #title>
      <div class="kb_drawer-title">
        Menu
      </div>
    </template>
    <template #default>
      <el-menu
        :default-active="menuStore.getActiveIndex"
        class="kb_menu-vertical"
      >
        <MenuAsideTree :tree-data="menuStore.asideMenu"></MenuAsideTree>
      </el-menu>
    </template>
  </el-drawer>
</template>

<style lang="less" scoped>
.kb_drawer-title {
  text-align: center;
  font-size: 18px;
  color: var(--el-menu-text-color);
  font-weight: 600;
}
</style>
