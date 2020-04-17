//用户可访问房间
<template>
  <div class="room-list">
    <h4>Channels</h4>
    <hr>
    <el-tabs :tab-position="tabPosition" style="height: 100%">
      <el-tab-pane> <div slot="label"><i class="el-icon-chat-round"></i></div>
        <el-table v-if="activeRoom" 
          ref="multipleTable"
          :data="this.rooms"
          :show-header="false"
          highlight-current-row
          style="width: 100%">
          <el-table-column
              property="name"
              href="#"
              @click="onChange(rooms)">
          </el-table-column>
        </el-table>
      </el-tab-pane>

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
      tabPosition: 'left',
      currentRow: null
    }
  },
  computed: {
    ...mapState([
      'rooms',
      'activeRoom'
    ]),
  },
  mounted:function(){
    console.log(this.$refs)
    let activeRow = null;
    let tableData = this.$refs.multipleTable.data
    for(let i = 0;i < tableData.length;i++){
      if(tableData[i].id === this.activeRoom.id){
        activeRow = i;
      }
    }
    this.$refs.multipleTable.setCurrentRow(this.$refs.multipleTable.data[activeRow]);
  },
}
</script>

<style scoped>
i {
  font-size: 20px;
}
.room-list{
  height: 100%;
}
.el-table .choosed-row {
  background: rgb(64, 158, 255);
}
</style>