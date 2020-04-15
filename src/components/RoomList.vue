//用户可访问房间
<template>
  <div class="room-list">
    <h4>Channels</h4>
    <hr>
    <el-tabs :tab-position="tabPosition" style="height: 100%">
      <el-tab-pane> <div slot="label"><i class="el-icon-chat-round"></i></div>房间列表</el-tab-pane>
      <el-tab-pane> <div slot="label"><i class="el-icon-search"></i></div>查找</el-tab-pane>
      <el-tab-pane> <div slot="label"><i class="el-icon-user"></i></div>用户</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RoomList',
  data(){
    return {
      tabPosition: 'left'
    }
  },
  computed: {
    ...mapState([
      'rooms',
      'activeRoom'
    ]),
  }
}
</script>

<style scoped>
i {
  font-size: 20px;
}
.room-list{
  height: 100%;
}
</style>