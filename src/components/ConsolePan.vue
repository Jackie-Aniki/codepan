<template>
  <div
    class="console-pan"
    :class="{'active-pan': isActivePan}"
    @click="setActivePan('console')"
    :style="style"
  >
    <div class="pan-head">
      <el-badge :value="logs.length" :max="99">Console</el-badge>
      <el-button icon="el-icon-delete" size="mini" v-show="logs.length" @click="clearLogs">Clear</el-button>
    </div>
    <div class="console-logs" ref="console">
      <div
        class="console-log cm-s-default"
        :class="`console-log-${log.type}`"
        :key="index"
        v-html="log.message"
        v-for="(log, index) in logs"
      ></div>
    </div>
    <pan-resizer pan="console" :enable="enableResizer"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Badge, Button } from "element-ui";
import panPosition from "@/utils/pan-position";
import PanResizer from "@/components/PanResizer.vue";
import { hasNextPan } from "@/utils";
import Event from "@/utils/event";

export default {
  data() {
    return {
      style: {},
      enableResizer: true
    };
  },
  watch: {
    logs() {
      const { console } = this.$refs;
      this.$nextTick(() => {
        console.scrollTop = console.scrollHeight;
      });
    },
    visiblePans: {
      immediate: true,
      handler(val) {
        this.style = panPosition(val, "console");
      }
    },
  },
  computed: {
    ...mapState(["activePan", "logs"]),
    isActivePan() {
      return this.activePan === "console";
    }
  },
  methods: {
    ...mapActions(["clearLogs", "setActivePan"])
  },
  components: {
    "el-badge": Badge,
    "el-button": Button,
    "pan-resizer": PanResizer
  }
};
</script>

<style lang="stylus" scoped>
.console-logs {
  height: calc(100% - 40px);
  overflow: auto;
}

.console-log {
  white-space: pre-wrap;
  padding: 10px;
  border-bottom: 1px solid #efefef;
}

.console-log-error {
  color: red;
}
</style>
