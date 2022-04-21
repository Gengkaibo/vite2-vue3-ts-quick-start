<script setup lang="ts">
import MyIdentify from './components/MyIdentify.vue'
import MyCopyright from '@/components/common/MyCopyright.vue'

import { useLoginForm } from './useLoginForm'

defineOptions({
  name: 'MyLogin',
})

onMounted(() => {
  refreshCode()
})
// 引入登录相关接口
const AccountFrom = ref()
const {
  loading,
  checked,
  loginRules,
  loginForm,
  submit,
  identifyCode,
  refreshCode,
} = useLoginForm(AccountFrom)

useHead({
  title: 'Login',
  meta: [
    {
      name: 'description',
      content: '登录vite-vue-ts-quick-start',
    },
  ],
})
</script>
<template>
  <div class="login">
    <div class="login_content">
      <el-form
        ref="AccountFrom"
        :model="loginForm"
        :rules="loginRules"
        @keyup.enter="submit"
      >
        <h3 class="login_title">
          Login
        </h3>
        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model="loginForm.username"
            prefix-icon="el-icon-s-custom"
            placeholder="用户名"
            name="username"
            type="text"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            ref="password"
            v-model="loginForm.password "
            prefix-icon="el-icon-lock"
            placeholder="密码"
            type="password"
            name="password"
          />
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            type="text"
            placeholder="请输入验证码"
          >
            <template #prepend>
              <span class="yz">
                验证码
              </span>
            </template>
            <template #append>
              <div
                class="login-code"
                @click="refreshCode"
              >
                <MyIdentify :identify-code="identifyCode" />
              </div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="main-item">
            <div class="item-left">
              <el-checkbox v-model="checked">
                记住密码
              </el-checkbox>
            </div>
            <div class="toregin">
              还没有账号？
              <span class="register">
                去注册
              </span>
            </div>
            <div class="item-left">
              忘记密码
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            class="login-btn"
            @click.prevent="submit"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <MyCopyright style="background-color: transparent; color: #fff" />
    <div class="login_bg_title animate__animated animate__slideInDown">
      一起向未来
    </div>
  </div>
</template>
<style scoped lang="less">
.login_content :deep(.el-input__inner) {
  height: 43px;
}

.login :deep(.el-input-group__append) {
  padding: 0;
}

.login_content :deep(.el-input__inner) {
  height: 44px;
}

.login_content :deep(.el-form-item__content) {
  margin-left: 0px !important;
  width: 100%;
}

.login_content :deep(.el-input) {
  margin-top: 0px;
  height: auto;
}

.login_content :deep(.el-form) {
  height: auto;
}
.login_content :deep(.el-input-group__prepend) {
  line-height: 44px;
}

.register {
  cursor: pointer;
}

.login {
  width: 100%;
  height: 100%;
  font-family: Microsoft YaHei;
  background: url('@/assets/images/login/1.jpeg');
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;

  .login_bg_title {
    width: 100%;
    position: absolute;
    top: 6vh;
    color: #ffffff;
    text-align: center;
    font-size: 40px;
    letter-spacing: 10px;
    background-image: -webkit-linear-gradient(bottom, red, #5f62ff, #ffffff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .login_content {
    width: 400px;
    height: 446px;
    padding: 10px 30px;
    display: block;
    color: #fff;
    margin: auto;
  }

  .login_title {
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    height: 68px;
    line-height: 68px;
    background-image: -webkit-linear-gradient(bottom,
        #a9ff00,
        #5fc1ff,
        #ffffff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .main-item {
    width: 100%;
    color: #424243;
    padding: 10px;
    background: #fff;

    .item-left {
      float: left;
      margin-right: 10px;
    }
  }

  .login-btn {
    width: 100%;
    height: 45px;
  }

  .toregin {
    float: right;
    margin-left: 10px;

    span {
      color: #2968ff;
    }
  }

  .yzm {
    padding: 0 20px;
  }
}
</style>
