# 为每个文件添加不通过的标题
you can go [HeadDemo](#/components/markdowns/demo/HeadDemo) to active router

# 在md中使用组件
* 注意，组件是经过[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)自动导入组件的，所以不需要再次导入
<IconDemo></IconDemo>

# 在md中写代码
```ts
<script setup>
  console.log('test-code')
</script>
```
f12打开调试工具刷新页面就能看到console的内容啦
<!-- 代码 -->
<script setup>
  console.log('test-code')
</script>
