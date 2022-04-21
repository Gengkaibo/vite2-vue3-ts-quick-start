import { piniaStore } from '../index'
import Base from '@/utils/lib/base'
import { TOKEN_KEY, USER_INFO_KEY, EXPIRY_TIME } from '@/config'

interface UserState {
  userInfo: any;
  token?: string;
}

export const useUserStore = defineStore('User', {
  state: (): UserState => ({
    // user info
    userInfo: Base.LocalStorage.getStore(USER_INFO_KEY),
    // token
    token: Base.LocalStorage.getStore(TOKEN_KEY),
  }),
  getters: {
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ''
      Base.LocalStorage.setStore(TOKEN_KEY, info, EXPIRY_TIME)
    },
    setUserInfo(info: any | null) {
      this.userInfo = info
      Base.LocalStorage.setStore(USER_INFO_KEY, info, EXPIRY_TIME)
    },
    resetState() {
      Base.LocalStorage.clearStore(TOKEN_KEY)
      Base.LocalStorage.clearStore(USER_INFO_KEY)
      this.userInfo = ''
      this.token = ''
    },
  },
})
// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(piniaStore)
}
