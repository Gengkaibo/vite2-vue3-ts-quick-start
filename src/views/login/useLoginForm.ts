import { Ref } from 'vue'
import { ElMessage } from 'element-plus'

import { goPath } from '@/router/utils'

import { useIdentifyCode } from './components/useIdentifyCode'

import Base from '@/utils/lib/base'
import { USER_MEMORY_KEY } from '@/config'
import api_dearth_base from '@/api/modules/api_dearth_base'



export const useLoginForm = (refForm: Ref<any>) => {
  const userStore = useUserStoreWithOut()
  // 验证码操作
  const {
    refreshCode,
    identifyCode,
  } = useIdentifyCode()
  const loginForm = reactive({
    username: 'admin',
    password: 'admin123',
    code: '',
  })
  const loginRules = {
    username: [
      {
        required: true,
        trigger: 'blur',
        message: '请输入用户名',
      },
    ],
    password: [
      {
        required: true,
        trigger: 'blur',
        message: '请输入密码',
      },
    ],
    code: [
      {
        required: true,
        message: '请输入验证码',
        trigger: 'blur',
      },
    ],
  }

  const loading = ref(false)
  const checked = ref(false)

  const handleLogin = (refForm: Ref<any>) => {
    return () => {
      if (loginForm.code.toLowerCase() !== identifyCode.value.toLowerCase()) {
        ElMessage.error('请填写正确验证码')
        refreshCode()
        return
      }
      refForm.value.validate((valid: boolean) => {
        if (valid) {
          /* loading.value = true
          api_dearth_base
            .login(loginForm)
            .then((res: any) => {
              if (res.data.code == 200) {
                res.data.respBody.userId = res.data.respBody.id
                userStore.setUserInfo(res.data.respBody)
                goPath('/MyPortal')
                // 记住密码
                if (checked.value) {
                  Base.LocalStorage.remove(USER_MEMORY_KEY)
                  Base.LocalStorage.set(USER_MEMORY_KEY, loginForm)
                } else {
                  Base.LocalStorage.remove(USER_MEMORY_KEY)
                }
              } else {
                loading.value = false
                ElMessage.error('账号或密码错误')
              }
            })
            .catch((error) => {
              // 对接口之前的测试数据用于跳转
              const user = {
                userName: '匿名用户',
                userId: '1',
              }
              userStore.setUserInfo(user)
              goPath('/')
            }) */

            // 对接口之前的测试数据用于跳转
            const user = {
              userName: '匿名用户',
              userId: '1',
            }
            userStore.setUserInfo(user)
            goPath('/')
        }
      })
    }
  }
  return {
    loading,
    checked,
    loginRules,
    loginForm,
    refreshCode,
    identifyCode,
    submit: handleLogin(refForm)
  }
}



