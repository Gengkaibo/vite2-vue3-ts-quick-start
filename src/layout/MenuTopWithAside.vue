<script setup lang="ts">
import Base from '@/utils/lib/base'
import { handleMenuClick } from '@/router/event/handlerMenu'
defineOptions({
  name: 'MenuTopWithAside',
})

defineProps({
  width: {
    type: String,
    default: () => {
      return 'calc(100% - 200px - 260px)'
    }
  },
})

const menuStore = useMenuStore()

</script>
<template>
  <div
    class="header-middle"
    :style="{
      width: width
    }"
  >
    <el-menu
      :default-active="menuStore.getActiveIndex"
      class="kb_menu-horizontal"
      mode="horizontal"
    >
      <el-menu-item
        v-for="level_1 in menuStore.navRoutes"
        :key="level_1.path"
        :index="level_1.path"
        :data-mark="level_1.path"
        @click="handleMenuClick({ item: level_1 })"
      >
        <span
          v-if="level_1.meta?.iconClass"
          class="iconfont kb_menu-icon"
          :class="[level_1.meta?.iconClass]"
        ></span>
        <img
          v-else-if="level_1.meta?.iconImage"
          class="kb_menu-image"
          :src="Base.getAssetsStaticSource(level_1.meta?.iconImage)"
        />
        <span class="kb_menu-title">
          {{ level_1.meta?.title }}
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.header-middle {
  height: 100%;
}

.header-middle .kb_menu-horizontal {
  border: transparent;
  background: transparent !important;
  height: 100%;
}
.kb_menu-horizontal .el-menu-item {
  width: 130px;
  height: 100%;
  padding: 0;
}
.kb_menu-horizontal .kb_menu-icon {
  margin-right: 2px;
  font-size: 20px;
  width: 40px;
  text-align: center;
}
.kb_menu-horizontal .kb_menu-image {
  margin-right: 2px;
  width: 40px;
}
// 颜色
.kb_menu-horizontal .el-menu-item {
  color: var(--el-menu-text-color);
  border-bottom: 0px !important;
}
.kb_menu-horizontal .el-menu-item:hover {
  color: var(--el-menu-active-color);
}
.kb_menu-horizontal .el-menu-item.is-active {
  color: var(--el-menu-active-color);
}
.kb_menu-horizontal .el-menu-item.un-active {
  color: var(--el-menu-text-color) !important;
}

.kb_menu-horizontal .el-menu-item::before {
  height: 2px;
  width: 0px;
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  background-color: var(--el-menu-active-color);
}
.kb_menu-horizontal .el-menu-item.is-active::before {
  width: 100%;
}
.kb_menu-horizontal .el-menu-item:hover::before {
  width: 100%;
  transition: width 0.3s;
}

</style>
