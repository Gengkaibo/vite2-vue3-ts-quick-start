<script setup lang="ts">
import Base from '@/utils/lib/base'
import { handleMenuClick } from '@/router/event/handlerMenu'
defineOptions({
  name: 'MenuTopTree',
})

defineProps({
  treeData: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
</script>
<template>
  <template v-for="level_1 in treeData">
    <el-sub-menu
      v-if="level_1.children?.length"
      :key="level_1.path"
      :index="level_1.path"
      :data-mark="level_1.path"
    >
      <template #title>
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
      </template>

      <MenuTopTree
        :tree-data="level_1.children"
      ></MenuTopTree>
    </el-sub-menu>

    <el-menu-item
      v-else
      :key="level_1.path + '_item'"
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
  </template>
</template>
<style lang="less" scoped>
</style>
