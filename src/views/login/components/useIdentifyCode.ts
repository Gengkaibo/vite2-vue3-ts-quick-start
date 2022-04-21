// 引入登录相关接口
export const useIdentifyCode = () => {
  const identifyCodes = '1234567890abcdefjhijklinopqrsduvwxyz'
  const identifyCode = ref('')
  // 重置验证码
  const refreshCode = () => {
    identifyCode.value = ''
    makeCode(identifyCodes, 4)
  }
  const makeCode = (o: string, l: number) => {
    for (let i = 0; i < l; i++) {
      identifyCode.value += o[randomNum(0, o.length)]
    }
  }
  const randomNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  return {
    refreshCode,
    identifyCode,
  }
}
