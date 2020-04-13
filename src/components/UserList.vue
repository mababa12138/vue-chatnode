//所选房间的成员
<template>
  <div class="user-list">
    <h4>Members</h4>
    <hr>
    <el-row>
      <el-col v-for="user in users" :key="user.username">
        {{ user.name }}
        <el-card v-if="user.presence"
        :variant="statusColor(user.presence)"
        pill>
        {{ user.presence }}</el-card
        
        >
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
      return status === 'online' ? 'success' : 'warning'
    }
  }
}
</script>