<template>
  <div class="login">
    <el-container>
      <el-main><LoginForm /></el-main>
    </el-container>
  </div>
</template>

<script>
  import LoginForm from '@/components/LoginForm.vue'

  export default {
    name: 'login',
    components: {
      LoginForm
    }
  }
</script>

<style>
  html,body {
    height: 100%;
  }
  body{
    background-image: url(//oem.faisys.com/image/demo2.png);
    margin: 0;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .login {
    margin-left: 50%;
    width: 20%;
    position: absolute;
    top: 20%;
    left: -10%;
  }
  .back {
    width: 100%;
    height: 100%;
  }
</style>