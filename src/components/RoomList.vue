//用户可访问房间
<template>
  <div class="room-list">
    <h4>Channels</h4>
    <hr>
    <el-tabs v-if="activeRoom" :tab-position="left">
      <el-tab-pane v-for="room in rooms"
                        :key="room.index"
                        :label="room.name"
                        :active="activeRoom.id === room.id"
                        href="#"
                        @click="onChange(room)">
        # {{ room.name }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RoomList',
  computed: {
    ...mapState([
      'rooms',
      'activeRoom'
    ]),
  }
}
</script>