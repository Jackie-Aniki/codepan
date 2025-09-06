<template>
  <el-dropdown
    trigger="click"
    class="home-header-left-item"
    @command="togglePan"
  >
    <el-button
      v-tippy="{ arrow: true }"
      title="Toggle pans"
      icon="el-icon-menu"
    >
      Toggle Pans
    </el-button>
    <el-dropdown-menu slot="dropdown" class="pan-toggles">
      <el-dropdown-item :class="{ visible: isVisible('code') }" command="code"
        >Code</el-dropdown-item
      >
      <el-dropdown-item
        :class="{ visible: isVisible('output') }"
        command="output"
        >Output</el-dropdown-item
      >
      <el-dropdown-item
        :class="{ visible: isVisible('console') }"
        command="console"
        ><el-badge :is-dot="totalLogsCount > 0"
          >Console</el-badge
        ></el-dropdown-item
      >
      <el-dropdown-item :class="{ visible: isVisible('html') }" command="html"
        >HTML</el-dropdown-item
      >
      <el-dropdown-item :class="{ visible: isVisible('css') }" command="css"
        >CSS</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Button, Badge, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'

export default {
  components: {
    'el-button': Button,
    'el-dropdown': Dropdown,
    'el-dropdown-menu': DropdownMenu,
    'el-dropdown-item': DropdownItem,
    'el-badge': Badge
  },
  computed: {
    ...mapState(['visiblePans']),
    totalLogsCount: (state) => (state.logs ? state.logs.length : 0)
  },
  methods: {
    ...mapActions(['togglePan']),
    isVisible(pan) {
      return this.visiblePans.indexOf(pan) !== -1
    }
  }
}
</script>

<style scoped>
.el-badge {
  vertical-align: top;
}

.pan-toggles {
  & > *::before {
    content: '+';
    display: inline-block;
    margin-right: 10px;
    width: 19px;
    height: 19px;
    line-height: 19.5px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    border-radius: 4px;
    background: black;
    color: white;
  }

  & > *:not(.visible)::before {
    content: '–';
    font-size: 20px;
    line-height: 17.5px;
    color: gray;
    opacity: 0.5;
  }
}
</style>
