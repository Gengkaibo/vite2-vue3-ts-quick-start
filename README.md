<div align="center">
<a><img alt="Logo" width="640" src="https://repository-images.githubusercontent.com/480210345/19ab05bc-ea5f-4cee-83f5-6c19a1270bf4"></a><br> <br>

[![license](https://img.shields.io/github/license/Gengkaibo/vite2-vue3-ts-quick-start.svg)](LICENSE)

## vite2-vue3-ts-quick-start
</div>

## 简介
`vite2-vue3-ts-quick-start`是一个使用了最新的vue3,vite2,TypeScript,Element-Plus等主流技术开发，开箱即用的前端模板，也可用于学习参考。

## 为什么要搭建vite2-vue3-ts-quick-start
随着前端技术的不断发展，新的技术层出不穷，vue3已经成为了vue的默认版本，在这个情况下，如果继续沿用vue2可能面临着技术停滞所带来的生产效率以及代码性能的同比下降，还有就是在进行招聘的时候，可能很难招聘到走在技术前列的程序员。使用新技术和内卷需要区分一下，这个是由上进心以及你是否真的喜欢自己所做的事导致的，对吧？真想躺的话，能躺的办法还是挺多的。如果想要进前端的领域并在其中找到真正的快乐，我认为还是得持续学习，学如逆水行舟，不进则退。vue3其实早就有了，只不过去年比较忙对于vue3的学习一直处于纸上谈兵的状态，又因为项目工期的原因，不太想直接上vue3，因此还没有真正的进行实践。今年我的目标就是要在实际项目中使用vue3。置于为什么要使用ts，这是趋势，2022年了，ts已经快成为一个前端的基本技能了。就跟几年前，jquery 时代快结束时，你不会vue或者react一样，根本找不到工作。如今别说 React，连 Vue 的默认版本都已经是 Vue3了，Vue3和Typescript 是绑在一起的，再过两年，除了祖传老项目，新项目就是清一色的ts了。在建筑领域，脚手架是为了保证各施工过程顺利进行而搭设的工作平台。在软件开发领域，如果把搭建项目想象成建造大型建筑的话，脚手架就是为了方便大家快速进入业务逻辑的开发，一个好的脚手架能显著提升工程效率，在这种情况下，就需要定制自己的开发模板，搭建一套属于自己的前端脚手架了，因此我在闲暇的时间需要先搭建一个适合我们团队的学会技术就能直接进行敏捷开发快速启动项目。今天，ta来了。

### 对比Vite和Vue-cli
Vite在开发环境下基于浏览器原生ES6 Modules提供功能支持，在生产环境下基于RollUp打包，Vue Cli不区分环境，都是基于Webpack。可以说在生产环境下，两者都是基于源码文件，RollUp和Webpack都是将代码进行处理，并提供出浏览器页面所需要的HTML，JavaScript，CSS，图片等静态文件。但是对于开发环境的处理，两者却有不同：
* Vue Cli在开发环境下也是基于对源码文件的转换，即利用Webpack对代码打包，结合webpack-dev-server提供静态资源服务。
* Vite在开发环境下基于浏览器原生ES6 Modules，无需对代码进行打包直接让浏览器使用。

Vite正是因为利用浏览器原生功能，而省略掉耗时的打包流程，实现项目快速的冷启动，即时的模块热更新，真正的按需编译

### 对比Vue3和Vue2
* diff算法的优化
* 更友好的支持兼容TS
* Compostion API，能够更好的组织逻辑，封装逻辑，复用逻辑
* 暴露了更底层的API和提供更先进的内置组件
* 按需编译，体积比vue2.x更小
* 支持多根节点组件等

### 对比TypeScript和JavaScript
* 静态类型校验，减少bug产生率，增强代码规范
* 静态类型利于阅读代码，针对大型应用，方法众多，调用关系复杂，不可能每个函数都有人编写细致的文档，所以静态类型就是非常重要的提示和约束

### 对比Pinia和Vuex
* Pinia 的 API 设计非常接近 Vuex 5 的提案。（作者是 Vue 核心团队成员）
* 无需像 Vuex 4 自定义复杂的类型来支持 typescript，天生具备完美的类型推断
* 模块化设计，你引入的每一个 store 在打包时都可以自动拆分他们
* 无嵌套结构，但你可以在任意的 store 之间交叉组合使用
* Pinia 与 Vue devtools 挂钩，不会影响 Vue 3 开发体验

## 项目地址

- [vite2-vue3-ts-quick-start](http://114.115.163.131:8080/) - 基础版

## 特性
- **导航预设**：`Left` | `Top` | `TopLeft` 三种模式
- **自定义主题色**：通过[CSS var()](https://www.w3school.com.cn/cssref/func_var.asp) 实现主题色的私人订制
- **明暗模式**：支持明暗模式切换
- **Markdown组件化**：通过[vite-plugin-md](https://github.com/antfu/vite-plugin-md) 实现`Markdown`作为组件，也可以让组件在Markdown中使用
- **多功能路由**：通过对路由的配置可实现导航式路由及“纯事件”路由（点击后仅进行事件派发）
- **API-generated**：除了对axios的简单封装以外，还可依赖后台swagger自动生成ts模型接口，详情可查看`src/api-generated/README.md`（需进行简单手动操作）

## 开发工具
- [VS Code 扩展](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown)

## 前序准备
- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) - 项目开发环境
- [Vite](https://vitejs.dev/) - 熟悉 vite 特性
- [Vue3](https://v3.vuejs.org/) - 熟悉 Vue 基础语法
- [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript` 基本语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉`es6`基本语法
- [Element-Plus](https://element-plus.org/) - 基于`Vue3`，面向设计师和开发者的组件库

## 插件
- [Vue Router](https://github.com/vuejs/vue-router)
- [Pinia](https://pinia.esm.dev) - 直接的, 类型安全的, 使用 Composition api 的轻便灵活的 Vue 状态管理
- [vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression/tree/master/#readme) - 开启gzip压缩
- [unplugin-vue-define-options/vite](https://github.com/sxzz/unplugin-vue-define-options#readme) - 引入 `defineOptions`,可以在`setup`中定义 `name`, `props`, `emits` 以及 `render`.
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
  - [unplugin-vue-components/resolvers](https://github.com/antfu/unplugin-vue-components) - element-plus按需加载自动注入
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md) - Markdown 作为组件，也可以让组件在 Markdown 中使用
  - [markdown-it-prism](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) 的语法高亮
  - [prism-theme-vars](https://github.com/antfu/prism-theme-vars) - 利用 CSS 变量自定义 Prism.js 的主题
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [@vueuse/head](https://github.com/vueuse/head) - 响应式地操作文档头信息

## 安装
拉取代码后，在项目根目录执行`npm install`，成功后执行`npm run dev`即可启动项目（需安装nodejs+npm）

## 构建
构建该应用只需要执行以下命令
```bash
npm run build
```
然后你会看到用于发布的 `dist` 文件夹被生成。

## 编码风格
- 使用 Composition API 地 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 配置为`.eslintrc`， 单引号、无分号等

## 如何贡献
你可以[提一个 issue](https://gitee.com/gengkaibo/vite2-vue3-ts-quick-start/issues) 或者提交一个 Pull Request。

#### Pull Request

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`

#### Git 贡献提交规范，参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范
  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `polish` 修改
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
