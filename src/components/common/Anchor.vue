<script setup lang="ts">
defineOptions({
  name: 'MdHref',
})
defineProps({
  href:{
    type: String,
    required: true
  }
})
const custormAnchor = (anchorName:string) => {
    // 找到锚点
    let anchorElement = document.getElementById(anchorName) || document.getElementsByName(anchorName)[0]
    // 如果对应id的锚点存在，就跳转到锚点
    anchorElement && anchorElement.scrollIntoView()
  }
</script>
<template>
  <a
    title="锚点定位链接"
    href="javascript:;"
    @click.prevent="custormAnchor(href)"
  >
    <slot></slot>
  </a>
</template>
<style lang="less" scoped>
a{
  font-style: italic;
}
</style>
