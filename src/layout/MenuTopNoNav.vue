<script setup lang="ts">
defineOptions({
  name: 'MenuTopNoNav',
})

defineProps({
  width: {
    type: String,
    default: () => {
      return 'calc(100% - 200px - 260px)'
    },
  },
})

</script>
<template>
  <div
    class="header-middle"
    :style="{
      width: width,
    }"
  >
  </div>
</template>
<style lang="less" scoped>
.header-middle {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
