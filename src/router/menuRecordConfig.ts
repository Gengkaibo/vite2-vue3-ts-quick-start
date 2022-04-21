import { RouteRecordRaw } from 'vue-router'
import CommonContainer from '@/components/common/CommonContainer.vue'

export const menuRecord: RouteRecordRaw[] = [
  {
    path: '/IntroduceWeb', // 注意，以 / 开头的嵌套路径将被视为根路径。这允许你不必使用嵌套的URL。
    name: 'IntroduceWeb',
    component: () => import('@/components/markdowns/IntroduceWeb.md'),
    meta: {
      title: 'IntroduceWeb',
      menuLevel: 1,
      isNav: true,
      keepAlive: true,
      isShowFooter: false,
      isPureMethod: false,
      iconClass: 'icon-purse',
    }
  },
  {
    path: '/Readme', // 注意，以 / 开头的嵌套路径将被视为根路径。这允许你不必使用嵌套的URL。
    name: 'Readme',
    component: () => import('@/components/markdowns/Readme.md'),
    meta: {
      title: 'Readme',
      menuLevel: 1,
      isNav: true,
      keepAlive: true,
      isShowFooter: false,
      isPureMethod: false,
      iconClass: 'icon-purse',
    }
  },
  {
    path: '/components/markdowns/demo',
    component: CommonContainer,
    meta: {
      title: 'Demo',
      menuLevel: 1,
      isNav: true,
      iconClass: 'icon-purse'
    },
    redirect: '/components/markdowns/demo/CodeDemo',
    children: [
      {
        path: '/components/markdowns/demo/CodeDemo',
        name: 'CodeDemo',
        component: () => import('@/components/markdowns/demo/CodeDemo.md'),
        meta: {
          title: 'CodeDemo',
          menuLevel: 2,
          isNav: true,
          keepAlive: true,
          isShowFooter: false,
          isPureMethod: false,
          iconClass: 'icon-purse'
        }
      },
      {
        path: '/components/markdowns/demo/HeadDemo',
        name: 'HeadDemo',
        component: () => import('@/components/markdowns/demo/HeadDemo.md'),
        meta: {
          title: 'HeadDemo',
          menuLevel: 2,
          isNav: true,
          keepAlive: true,
          isShowFooter: false,
          isPureMethod: false,
          iconClass: 'icon-purse'
        }
      }
    ]
  },
  {
    path: '/event/PureMethod',
    name: 'PureMethod',
    component: {
      template: '',
    },
    meta: {
      title: '纯净方法',
      menuLevel: 1,
      isNav: true,
      keepAlive: false,
      isShowFooter: false,
      isPureMethod: true,
      iconClass: 'icon-purse'
    }
  },
  {
    path: '/event/PureMethod2',
    name: 'PureMethod2',
    component: {
      template: '',
    },
    meta: {
      title: '纯净方法2',
      menuLevel: 1,
      isNav: true,
      iconClass: 'icon-purse'
    },
    children: [
      {
        path: '/event/PureMethod2-1',
        name: 'PureMethod2-1',
        component: {
          template: '',
        },
        meta: {
          title: '纯净方法2-1',
          menuLevel: 2,
          isNav: true,
          iconClass: 'icon-purse'
        },
        children: [
          {
            path: '/event/PureMethod2-1-1',
            name: 'PureMethod2-1-1',
            component: {
              template: '',
            },
            meta: {
              title: '纯净方法2-1-1',
              menuLevel: 3,
              isNav: true,
              keepAlive: false,
              isShowFooter: false,
              isPureMethod: true,
              iconClass: 'icon-purse'
            }
          },
          {
            path: '/event/PureMethod2-1-2',
            name: 'PureMethod2-1-2',
            component: {
              template: '',
            },
            meta: {
              title: '纯净方法2-1-2',
              menuLevel: 3,
              isNav: true,
              keepAlive: false,
              isShowFooter: false,
              isPureMethod: true,
              iconClass: 'icon-purse'
            }
          },
          {
            path: '/event/PureMethod2-1-3',
            name: 'PureMethod2-1-3',
            component: {
              template: '',
            },
            meta: {
              title: '纯净方法2-1-3',
              menuLevel: 3,
              isNav: true,
              iconClass: 'icon-purse'
            },
            children: [
              {
                path: '/event/PureMethod2-1-3-1',
                name: 'PureMethod2-1-3-1',
                component: {
                  template: '',
                },
                meta: {
                  title: '纯净方法2-1-3-1',
                  menuLevel: 4,
                  isNav: true,
                  keepAlive: false,
                  isShowFooter: false,
                  isPureMethod: true,
                  iconClass: 'icon-purse'
                }
              },
              {
                path: '/event/PureMethod2-1-3-2',
                name: 'PureMethod2-1-3-2',
                component: {
                  template: '',
                },
                meta: {
                  title: '纯净方法2-1-3-2',
                  menuLevel: 4,
                  isNav: true,
                  keepAlive: false,
                  isShowFooter: false,
                  isPureMethod: true,
                  iconClass: 'icon-purse'
                }
              },
            ]
          },
        ]
      },
      {
        path: '/event/PureMethod2-2',
        name: 'PureMethod2-2',
        component: {
          template: '',
        },
        meta: {
          title: '纯净方法2-2',
          menuLevel: 2,
          isNav: true,
          keepAlive: false,
          isShowFooter: false,
          isPureMethod: true,
          iconClass: 'icon-purse'
        }
      },
      {
        path: '/event/PureMethod2-3',
        name: 'PureMethod2-3',
        component: {
          template: '',
        },
        meta: {
          title: '纯净方法2-3',
          menuLevel: 2,
          isNav: true,
          keepAlive: false,
          isShowFooter: false,
          isPureMethod: true,
          iconClass: 'icon-purse'
        }
      },
    ]
  },
]

// 将需要保持激活状态的组件导出
const keepAliveNames: string[] = []
function deepLoop(arr: string[], list: RouteRecordRaw[]) {
  list.forEach(element => {
    if (element.children?.length) {
      deepLoop(arr, element.children)
    } else {
      element.meta?.keepAlive && arr.push(element.name?.toString() || '')
    }
  })
}
deepLoop(keepAliveNames, menuRecord)
console.log(keepAliveNames)
export { keepAliveNames }

