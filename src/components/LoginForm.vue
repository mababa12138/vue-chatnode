<template>
  <div class="login-form">
    <div>
    <h5 class="text-center">聊天系统登录</h5>
    </div>
    <hr>
    <el-form @submit.prevent="onSubmit">
      <el-alert type="error" v-if="hasError">{{ error }} </el-alert>
      <el-form-item
      label="Username">
        <el-input 
                type="text" 
                placeholder="Enter user name" 
                v-model="userId" 
                autocomplete="off" 
                :disabled="loading" required>
        </el-input>
      </el-form-item>

      <el-button type="primary"  
                 class="ld-ext-right" 
                 v-bind:class="{ running: loading }"
                 :disabled="isValid">Login
      </el-button>
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
      }
    },
    computed: {
      isValid: function () {
        const result = this.userId.length < 3;
        return result ? result : this.loading
      },
      ...mapState([
        'loading',
        'error'
      ]),
      ...mapGetters([
        'hasError'
      ])
    }
  }
</script>