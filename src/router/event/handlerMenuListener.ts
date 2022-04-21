// 导航纯净事件打开
export const openEvent = (path?: string) => {
  $(`.el-menu li[data-mark="${path}"]`).addClass('is-active')
  switch (path) {
    case '/event/PureMethod':
      alert('点击了导航=>纯净方法1')
      break
    case '/event/PureMethod2-2':
      alert('点击了导航=>纯净方法2-2')
      break
  }
}
// 导航纯净事件关闭
export const closeEvent = (path?: string) => {
  $(`.el-menu li[data-mark="${path}"]`).removeClass('is-active')
  switch (path) {
    case '/event/PureMethod':
      alert('再次点击了纯净方法导航')
      break
    case '/event/PureMethod2-2':
      alert('再次点击了纯净方法导航2-2')
      break
  }
}
