//用于将消息发送到所选房间的表单
<template>
  <div class="message-form ld-over">
    <small class="text-muted">@{{ user.username }}</small>
    <el-form @submit.prevent="onSubmit" class="ld-over" v-bind:class="{ running: sending }">

      <div class="ld ld-ring ld-spin"></div>
      <el-alert variant="danger" v-show="hasError">{{ error }} </el-alert>
      <el-form-item>
        <el-input id="message-input"
        ref="text-input"
        type="text"
        v-model="messageContent"
        placeholder="Enter Message"
        autocomplete="off"
        required>
        </el-input>
      </el-form-item>

      <div>
        <el-button type="submit" variant="primary" class="float-right">
          Send
        </el-button>
      </div>
      
    </el-form>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'message-form',
  data(){
    return {
      messageContent: '',
    }
  },
  computed: {
    ...mapState(['toAccount', 'currentConversationType']),
    ...mapGetters({
      memberList: state => state.group.currentMemberList,
      userID: state => state.user.userID
    })
  },
  methods: {
    sendTextMessage() {
      if (
        this.messageContent === '' ||
        this.messageContent.trim().length === 0
      ) {
        this.messageContent = ''
        this.$store.commit('showMessage', {
          message: '不能发送空消息哦！',
          type: 'info'
        })
        return
      }
      const message = this.tim.createTextMessage({
        to: this.toAccount,
        conversationType: this.currentConversationType,
        payload: { text: this.messageContent }
      })
      this.$store.commit('pushCurrentMessageList', message)
      this.$bus.$emit('scroll-bottom')
      this.tim.sendMessage(message).catch(error => {
        this.$store.commit('showMessage', {
          type: 'error',
          message: error.message
        })
      })
      this.messageContent = ''
    },
  }
}
</script>

<style scoped>
.float-right {
  float: right;
}
</style>