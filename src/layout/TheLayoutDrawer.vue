<script setup lang="ts">
import { useLayoutType } from '@/hooks/ui/useLayoutType'
import { useThemeColor } from '@/hooks/ui/useThemeColor'
import { useDarkOrLight } from '@/hooks/ui/useDarkOrLight'
import { THEME_COLOR } from '@/config'
defineOptions({
  name: 'TheLayoutDrawer',
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

const layoutStore = useLayoutStore()
// 切换明暗主题
const _isDark = ref(layoutStore.isDark)
watchEffect(() => {
  useDarkOrLight(_isDark.value)
})

// 切换布局
const layoutType = ref(layoutStore.getLayoutType)
watch(layoutType, () => {
  useLayoutType(layoutType.value)
})

// 改变主题色
const customColor = ref(THEME_COLOR)
watchEffect(() => {
  useThemeColor(customColor.value)
})
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
</script>
<template>
  <el-drawer
    :size="layoutStore.isMobile ? '80%' : '20%'"
    :model-value="isVisible"
    direction="rtl"
    :lock-scroll="false"
    :before-close="handleClose"
  >
    <template #title>
      <div class="kb_drawer-title">
        Configurator
      </div>
    </template>
    <template #default>
      <div>
        <div class="drawer-item-title">
          Toggle light and dark themes
        </div>
        <div class="drawer-item-content">
          <el-switch
            v-model="_isDark"
            size="small"
            active-text="Dark"
            inactive-text="Light"
            active-color="var(--el-menu-active-color)"
            inactive-color="var(--el-menu-active-color)"
          />
        </div>
      </div>
      <div>
        <div class="drawer-item-title">
          Select primary color
        </div>
        <div class="drawer-item-content">
          <el-color-picker
            v-model="customColor"
            show-alpha
            :predefine="predefineColors"
          />
        </div>
      </div>
      <div>
        <div class="drawer-item-title">
          Switch layout
        </div>
        <div class="drawer-item-content">
          <el-radio-group
            v-model="layoutType"
            size="small"
            :disabled="layoutStore.isMobile"
          >
            <el-radio-button label="Top">
              Only Top
            </el-radio-button>
            <el-radio-button label="TopLeft">
              Top And Left
            </el-radio-button>
            <el-radio-button label="Left">
              Only Left
            </el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </template>
  </el-drawer>
</template>

<style lang="less" scoped>
.el-switch {
  :deep(.el-switch__label) {
    color: var(--el-menu-text-color);
  }
  :deep(.el-switch__label.is-active) {
    color: var(--el-menu-active-color);
  }
}

.kb_drawer-title {
  text-align: center;
  font-size: 18px;
  color: var(--el-menu-text-color);
  font-weight: 600;
}
.drawer-item-title {
  font-size: 14px;
  color: var(--el-menu-active-color);
  font-weight: 600;
  line-height: 60px;
  height: 60px;
}
.drawer-item-content {
  display: flex;
  justify-content: center;
}
</style>
