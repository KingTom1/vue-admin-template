<template>
  <div class="dashboard-container">
    <div class="dashboard-text">你好首页 {{ name }}</div>
    <div class="dashboard-text">你好首页 {{ roles }}</div>
    <div class="dashboard-text">你好首页 {{ token }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles',
      'token'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
