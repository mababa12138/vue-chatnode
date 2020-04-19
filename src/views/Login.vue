<template>
  <div class="back">
    <div class="login" id="user_list">
      <el-container>
        <el-main>
          <LoginForm />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  import LoginForm from '@/components/LoginForm.vue'

  export default {
    name: 'login',
    components: {
      LoginForm
    },
  }
</script>
<style>
  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
  }

  .login {
    margin-left: 50%;
    width: 20%;
    position: absolute;
    top: 20%;
    left: -10%;
    background: white;
    border-radius: 10px;
  }

  .back {
    width: 100%;
    height: 100%;
    background-image: url(//oem.faisys.com/image/demo2.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>