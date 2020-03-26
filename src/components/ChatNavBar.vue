//基本导航栏
<template>
  <el-row id="chat-navbar">
    <el-col href="#" :span="1">Vue Chat</el-col>
    <el-col :span="1" :push="21"><div class="user">{{ user.name }} | </div></el-col>
    <el-col :span="1" :push="21"><a href="#" active>Logout</a></el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChatNavBar',
  computed: {
    ...mapState([
      'user',
    ])
  },
}
</script>

<style>
  #chat-navbar {
    margin-bottom: 15px;
    background: rgb(23,162,184);
    padding: 15px;
    color: white;
  }
  .user {
    text-align: right;
    margin-right: 10px;
  }
  a {
    color: white;
    text-decoration: none;
  }
</style>