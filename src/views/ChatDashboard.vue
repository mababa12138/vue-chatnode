<template>
  <div class="chat-dashboard">
    <ChatNavBar />
    <div fluid class="ld-over" v-bind:class="{ running: loading }">
      <div class="ld ld-ring ld-spin"></div>
      <el-row>

        <el-col :span="4" style="height:100%">
          <RoomList />
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col id="chat-content">
              <MessageList />
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <MessageForm />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <UserList />
        </el-col>

      </el-row>

    </div>
  </div>
</template>

<script>
import ChatNavBar from '@/components/ChatNavBar.vue'
import RoomList from '@/components/RoomList.vue'
import MessageList from '@/components/MessageList.vue'
import MessageForm from '@/components/MessageForm.vue'
import UserList from '@/components/UserList.vue'
import { mapState } from 'vuex';

export default {
  name: 'Chat',
  components: {
    ChatNavBar,
    RoomList,
    UserList,
    MessageList,
    MessageForm
  },
  computed: {
    ...mapState([
      'loading'
    ])
  }
}
</script>