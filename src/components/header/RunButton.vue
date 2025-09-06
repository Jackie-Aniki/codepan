<template>
  <el-button
    v-tippy="{ arrow: true }"
    :disabled="autoRun"
    :icon="iframeStatusIcon"
    :type="iframeStatus === 'error' ? 'danger' : 'primary'"
    plain
    title="Run once"
    @click="runCode"
  >
    Run
  </el-button>
</template>

<script>
import Event from '@/utils/event'
import { mapState, mapGetters } from 'vuex'
import { Button } from 'element-ui'
import { inIframe } from '@/utils'

export default {
  data() {
    return {
      inIframe
    }
  },
  computed: {
    ...mapState(['editorStatus', 'autoRun', 'iframeStatus']),
    ...mapGetters(['isLoggedIn', 'canUpdateGist']),
    iframeStatusIcon() {
      switch (this.iframeStatus) {
        case 'loading':
          return 'el-icon-loading'
        case 'error':
          return 'el-icon-warning'
        default:
          return 'el-icon-refresh'
      }
    }
  },
  methods: {
    runCode() {
      Event.$emit('run')
    }
  },
  components: {
    'el-button': Button
  }
}
</script>
