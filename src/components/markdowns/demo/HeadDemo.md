---
title: My Cool App
meta:
  - name: description
    content: Hello World
---
# 现在浏览到的是md组件，添加以下内容标签的名字变成了‘My Cool App’ 😀
```
title: My Cool App
meta:
  - name: description
    content: Hello World
```
# 在vue组件中，可以在App.vue中添加全局的标题，也可以为每个组件单独声明
```ts
useHead({
  title: import.meta.env.VITE_APP_TITLE? import.meta.env.VITE_APP_TITLE.toString() : 'My-App',
  meta: [
    {
      name: 'keywords',
      content: 'vite,vue,markdown,typescript,element-plus,vite-vue-ts-quick-start',
    },
    {
      name: 'description',
      content: '这是一个vite-vue-ts-quick-start项目，目的是为了让开发人员快速搭建并开始项目开发。',
    },
    {
      name: 'author',
      content: '@沉淀',
    },
  ],
})
```
```ts
useHead({
  title: 'Login',
  meta: [
    {
      name: 'description',
      content: '登录vite-vue-ts-quick-start',
    },
  ],
})
```
