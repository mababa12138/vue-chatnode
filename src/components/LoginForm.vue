<template>
  <div class="login-form">
    <div>
    <h5 class="text-center">聊天系统登录</h5>
    </div>
    <hr>
    <el-form @submit.prevent="onSubmit" :model="ruleForm" :rules="rules" ref="ruleForm" status-icon>
      <el-alert type="error" v-if="hasError">{{ error }} </el-alert>
      <el-form-item label="用户名" prop="username">
        <el-input 
                type="text" 
                placeholder="Enter user name" 
                v-model="ruleForm.username" 
                autocomplete="off" >
        </el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pwd">
        <el-input 
                type="password" 
                placeholder="Enter password" 
                v-model="ruleForm.pwd" 
                autocomplete="off" >
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"  
                   class="ld-ext-right" 
                   v-bind:class="{ running: loading }"
                   @click="handleSubmit('ruleForm')">Login
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
        userId: '',
        ruleForm: {
         username: '',
         pwd: '',
         isShowTip: false
        },
        rules: {
          username: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
        },
      }
    },
    computed: {
      ...mapState([
        'loading',
        'error'
      ]),
      ...mapGetters([
        'hasError'
      ])
    },
    methods: {
      handleSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let vm = this;
            this.$im.conn.open({
              apiUrl: this.$im.config.apiURL,
              appKey: this.$im.config.appkey,
              user: this.ruleForm.username,
              pwd: this.ruleForm.pwd,
              success: function (message) {
                vm.$util.setWebImUsername(message.user.username);
                vm.$util.setWebImNickName(message.user.nickname);
                vm.$util.setWebImToken(message.access_token);
                vm.$router.push({
                  name: 'home'
                })
              },
              error: function () {
                // 环信的重试机制会触发多次error
                console.log(this.isShowTip)
                if (!this.isShowTip) {
                  this.isShowTip = true;
                  vm.$Message.error({
                    content: '登录环信失败'
                  })
                }
              }
            });
          }
        });
      }
    },
  }
</script>