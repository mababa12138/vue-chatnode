<template>
  <div class="login-form">
    <div>
      <h5 class="text-center">聊天系统登录</h5>
    </div>
    <hr>
    <el-form @submit.prevent="onSubmit" :model="form" :rules="rules" ref="login" status-icon  @keydown.enter.native="submit">
      <el-alert type="error" v-if="hasError">{{ error }} </el-alert>
      <el-select v-model="form.userID" class="user-selector">
          <el-option
            v-for="index in 30"
            :key="index"
            :label="`user${index-1}`"
            :value="`user${index-1}`"
          ></el-option>
        </el-select>
      <!-- <el-form-item label="用户名" prop="userID">
        <el-input type="text" placeholder="Enter user name" v-model="form.userID" autocomplete="off" clearable>
        </el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="Enter password" v-model="form.password" autocomplete="off" clearable>
        </el-input>
      </el-form-item> -->

      <el-form-item>
        <el-button type="primary" 
        class="ld-ext-right"
        @click="submit"
        :loading="loading">Login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from 'vuex'

  export default {
    name: 'login-form',
    data() {
      return {
        form: {
          userID: '',
          password: '',
        },
        rules: {
          userID: [{
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }],
        },
        loading: false
      }
    },
    computed: {
      ...mapState([
        'error'
      ]),
      ...mapGetters([
        'hasError'
      ])
    },
    methods: {
      submit() {
        this.$refs['login'].validate(valid => {
          if (valid) {
            this.login()
          }
        })
      },
      login() {
      this.loading = true
      this.tim
        .login({
          userID: this.form.userID,
          userSig: window.genTestUserSig(this.form.userID).userSig
        })
        .then(() => {
          this.loading = false
          this.$store.commit('toggleIsLogin', true)
          this.$store.commit('startComputeCurrent')
          this.$store.commit({
            type: 'GET_USER_INFO',
            userID: this.form.userID,
            userSig: window.genTestUserSig(this.form.userID).userSig,
            sdkAppID: window.genTestUserSig('').SDKAppID
          })
          this.$store.commit('showMessage', {
            type: 'success',
            message: '登录成功'
          })
          this.$router.push('chat');
        })
        .catch(error => {
          this.loading = false
          this.$store.commit('showMessage', {
            message: '登录失败：' + error.message,
            type: 'error'
          })
        })
    },
    },
  }
</script>

<style scoped>
.user-selector {
  width: 100%;
  margin-top: 10px;
}
.ld-ext-right{
  margin-top: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.login-form {
  height: 200px;
}
</style>