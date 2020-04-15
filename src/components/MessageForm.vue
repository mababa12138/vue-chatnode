//用于将消息发送刀所选房间的表单
<template>
  <div class="message-form ld-over">
    <small class="text-muted">@{{ user.username }}</small>
    <el-form @submit.prevent="onSubmit" class="ld-over" v-bind:class="{ running: sending }">

      <div class="ld ld-ring ld-spin"></div>
      <el-alert variant="danger" v-show="hasError">{{ error }} </el-alert>
      <el-form-item>
        <el-input id="message-input"
                      type="text"
                      v-model="message"
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
  data() {
    return {
      message: ''
    }
  },
  computed: {
    ...mapState([
      'user',
      'sending',
      'error',
      'activeRoom'
    ]),
    ...mapGetters([
      'hasError'
    ])
  },
  mounted:function() {
    console.log(this.user)
  }
}
</script>

<style scoped>
.float-right {
  float: right;
}
</style>