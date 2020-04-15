//所选房间的成员
<template>
  <div class="user-list">
    <h4>Members</h4>
    <hr>
    <el-row>
      <el-col v-for="user in users" :key="user.username">
        {{ user.name }}
        <el-tag v-if="user.presence"
        :type="statusColor(user.presence)"
        effect="dark"
        size="mini">
        {{ user.presence }}</el-tag>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'user-list',
  computed: {
    ...mapState([
      'loading',
      'users'
    ])
  },
  methods: {
    statusColor(status) {
      console.log('success')
      return status === 'online' ? 'success' : 'warning'
    }
  }
}
</script>

<style scoped>
.el-tag {
  border-radius: 15px;
  padding: 0 8px;
}
</style>