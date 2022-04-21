<script setup lang="ts">
import { goPath } from '@/router/utils'
import { useDarkOrLight } from '@/hooks/ui/useDarkOrLight'

defineOptions({
  name: 'MyPortal',
})
const activeMask = ref('')
const goFeature = (isDark: boolean) => {
  useDarkOrLight(isDark)
  goPath('/IntroduceWeb')
}

const layoutStore = useLayoutStore()
onMounted(() => {
  layoutStore.setIsForceHorizontal(true)
})

onBeforeUnmount(() => {
  layoutStore.setIsForceHorizontal(false)
})
</script>
<template>
  <div
    ref="portalContainer"
    :class="[
      'portal-bg',
      activeMask ? (activeMask == 'left' ? 'bg-position-left' : 'bg-position-right') : '',
    ]"
  >
    <div
      class="portal-bg-left"
      @mouseenter="activeMask = 'left'"
      @mouseleave="activeMask = ''"
      @click="goFeature(false)"
    >
      <div :class="['mask-left', activeMask ? 'active-left' : '']"></div>
      <div
        :class="[
          'portal-bg-title animate__animated',
          activeMask == 'left' ? 'animate__lightSpeedInLeft' : 'animate__fadeOutDown',
        ]"
      >
        黎明使者
      </div>
    </div>
    <div class="portal-bg-center">
      <span
        :class="[
          'animate__animated',
          'animate__jello',
          activeMask == 'left' || activeMask == 'right' ? 'animate__zoomOut' : '',
        ]"
      >
        Choose Your Style
      </span>
    </div>
    <div
      class="portal-bg-right"
      @mouseenter="activeMask = 'right'"
      @mouseleave="activeMask = ''"
      @click="goFeature(true)"
    >
      <div :class="['mask-right', activeMask ? 'active-right' : '']"></div>
      <div
        :class="[
          'portal-bg-title animate__animated',
          activeMask == 'right' ? 'animate__lightSpeedInRight' : 'animate__fadeOutDown',
        ]"
      >
        黑夜使者
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.portal-bg {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/portal/light-dark.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  transition: background-position 1s;
  &-left {
    width: 40%;
    position: relative;
    .portal-bg-title {
      width: 200px;
      text-align: right;
      top: 40vh;
      background-image: -webkit-linear-gradient(
        bottom,
        rgb(43, 15, 107),
        #5f62ff,
        #7390b3
      );
      right: 60px;
    }
  }
  .portal-bg-center {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    span {
      font-size: 40px;
    }
  }
  &-right {
    position: relative;
    width: 40%;
    .portal-bg-title {
      width: 200px;
      text-align: left;
      top: 40vh;
      background-image: -webkit-linear-gradient(top, #ff8400, #361919, #000000);
      left: 60px;
    }
  }
}
.mask-left {
  background-color: rgba(5, 5, 5, 0.2);
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
.mask-right {
  background-color: rgba(5, 5, 5, 0.2);
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
.active-left {
  transform: translateX(-100%);
}
.active-right {
  transform: translateX(100%);
}
.portal-bg-title {
  position: absolute;
  width: 100%;
  color: white;
  font-size: 40px;
  letter-spacing: 10px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-position-left {
  background-position: left;
}
.bg-position-right {
  background-position: right;
}
</style>
