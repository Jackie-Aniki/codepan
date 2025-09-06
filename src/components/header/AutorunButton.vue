<template>
  <el-button
    v-tippy="{ arrow: true }"
    :icon="autoRun ? 'el-icon-video-pause' : 'el-icon-video-play'"
    :title="autoRunHumanReadable"
    type="primary"
    plain
    @click="setAutoRun(!autoRun)"
  >
    AutoRun
  </el-button>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { Checkbox } from 'element-ui'

export default {
  computed: {
    ...mapState(['autoRun']),
    ...mapGetters(['isLoggedIn', 'canUpdateGist']),
    autoRunHumanReadable() {
      return this.autoRun ? 'Auto Running' : 'Start Auto Run'
    }
  },
  methods: {
    ...mapActions(['setAutoRun'])
  },
  components: {
    'el-checkbox': Checkbox
  }
}
</script>
