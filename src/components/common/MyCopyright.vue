<script setup lang="ts">
defineOptions({
  name: 'MyCopyright',
})
</script>
<template>
  <p class="my-copyright">
    <span>Copyright (c) 2022 @沉淀</span>
  </p>
</template>
<style lang="less" scoped>
.my-copyright {
  min-width: 100%;
  height: 30px;
  line-height: 30px;
  position: absolute;
  text-align: center;
  bottom: 0px;
  color: #000;
  background-color: #ffffff;
  white-space: nowrap;
  box-shadow: 0 0px 8px #f0f1f2;
}
</style>
