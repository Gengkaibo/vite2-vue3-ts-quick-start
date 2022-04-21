<script setup lang="ts">
import { ArrowDown, Avatar } from '@element-plus/icons-vue'
import TheLayoutDrawer from './TheLayoutDrawer.vue'
import { logout } from '@/router/utils'
defineOptions({
  name: 'TheTopRight',
})

const props = defineProps({
  width: {
    type: String,
    default: () => {
      return '260px'
    },
  },
})

// 是否显示抽屉
const isShowDrawer = ref(false)
const changeDrawerVisible = () => {
  isShowDrawer.value = !isShowDrawer.value
}

const { isMobile } = storeToRefs(useLayoutStore())
// 屏幕全屏
const screenIcon = ref('icon-full')
const changeScreen = () => {
  if (screenIcon.value == 'icon-full') {
    document.documentElement.requestFullscreen()
    screenIcon.value = 'icon-mid'
  } else {
    screenIcon.value = 'icon-full'
    document.exitFullscreen()
  }
}
</script>
<template>
  <div
    class="header-right"
    :style="{
      width: isMobile? 'calc(100% - 50px)' :props.width,
    }"
  >
    <span
      v-show="!isMobile"
      :class="[
        'iconfont',
        'icon-screen',
        'header-right-item',
        'hover-to-active',
        screenIcon,
      ]"
      @click="changeScreen"
    ></span>
    <el-dropdown class="hover-to-active header-right-item">
      <span class="el-dropdown-link">
        <el-icon>
          <Avatar />
        </el-icon>
        <span class="el-dropdown-link-text">
          沉淀
        </span>
        <el-icon>
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">
            退出登录
          </el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>
            Action 4
          </el-dropdown-item>
          <el-dropdown-item divided>
            Action 5
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span
      :class="['iconfont', 'icon-gearset', 'hover-to-active']"
      @click="changeDrawerVisible"
    ></span>

    <TheLayoutDrawer
      :is-visible="isShowDrawer"
      @change-visible="changeDrawerVisible"
    ></TheLayoutDrawer>
  </div>
</template>

<style lang="less" scoped>
.header-right {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &-item {
    margin-right: 20px;
  }
  .el-dropdown-link {
    cursor: pointer;
    &-avatar,
    &-text {
      font-size: 16px;
    }
  }
}
</style>
