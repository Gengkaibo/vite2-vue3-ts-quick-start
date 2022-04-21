import router from '@/router'
const userStore = useUserStoreWithOut()

export const goPath = (path: string) => {
  router.push(path)
}

export const goLoginPath = () => {
  router.push('/MyLogin')
}

export const logout = () => {
  userStore.resetState()
  goLoginPath()
}
