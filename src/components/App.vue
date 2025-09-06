<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="nprogress/nprogress.css"></style>
<style src="vue-slim-modal/themes/default.css"></style>
<style src="v-tippy/dist/tippy.css"></style>
<style src="notie/dist/notie.min.css"></style>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  background-color: #f9f9f9;
  font-family: Arial;
  font-size: 10px;

  > iframe {
    display: none;
  }
}

* {
  box-sizing: border-box;
}

pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;

  > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }
}

aside:empty {
  display: none;
}

header {
  width: 100vw;
  min-height: 2.5rem;
  padding: 0 0.25rem;
  display: flex;
  flex-direction: row;

  * {
    padding: 0 !important;
  }

  > * {
    flex-grow: 1;
    flex-basis: auto;

    > .el-button {
      width: 100%;
      height: 100%;
    }
  }

  .el-button,
  .el-checkbox {
    color: #28f !important;
    background-color: transparent !important;
    border: 0 !important;
    border-radius: 0 !important;
    display: flex !important;
    margin: 0 !important;
    justify-content: center;
    align-items: center;

    span:not(i):not(.el-checkbox__input) {
      display: none;
    }
  }

  i {
    transform: scale(1.6);
  }

  .el-checkbox__input {
    transform: scale(1.4);
    margin-top: -4px !important;
  }
}

.el-checkbox__input.is-checked,
.el-checkbox__input.is-indeterminate {
  .el-checkbox__inner {
    background-color: #28f;
    border-color: #28f;
  }
}

pre {
  word-break: break-all;
}

.el-checkbox {
  .el-checkbox__input {
    padding: 0;
    height: 14px !important;
    width: 14px !important;
  }

  .el-checkbox__inner {
    display: inline-block !important;
  }
}

.el-badge__content.is-fixed {
  top: 50%;
  right: -6px;
  padding: 0;
  font-size: inherit;
  width: 1.6em;
  height: 1.6em;
  line-height: 1.6em;
  user-select: none;
  text-align: center;
  background: #f44;
  text-shadow: 0 0 2px red;
  box-shadow: 0 0 2px red inset;
}

.pan-head button {
  padding: 4px 8px;
  vertical-align: top;
  float: right;

  span {
    margin-left: 4px;
  }
}

.compiled-code-dialog {
  width: calc(100% - 20px) !important;
  max-width: 800px !important;
}

.page {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.tippy-popper[x-placement^='top'] .tippy-arrow {
  margin-bottom: 1px !important;
}

.tippy-popper[x-placement^='bottom'] .tippy-arrow {
  margin-top: 1px !important;
}

span:empty {
  display: none;
}

.el-dropdown .el-icon--right {
  position: absolute;
  top: 0;
}

.el-message-box {
  width: calc(100% - 20px) !important;
  max-width: 420px;
}

#output-iframe {
  display: flex;
  flex: 1;
  justify-content: stretch;

  iframe {
    border: 0 !important;
    height: 100%;
    position: absolute;
  }
}

.pans {
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 1;
  position: relative;
}

.pan {
  flex: auto;
  left: 0 !important;
  right: 0 !important;
  border-top: 1px dashed #048;
  overflow: auto;
  position: relative;

  .pan-head {
    padding: 4px 4px 0 4px;
    line-height: 1;

    .el-dropdown {
      font-size: inherit;
      color: inherit;
    }
  }
}

.CodeMirror-sizer {
  margin-left: 0 !important;
}

.CodeMirror-lines {
  padding: 0 !important;
}

.CodeMirror-gutter-wrapper,
.CodeMirror-gutters {
  display: none;
}

.CodeMirror-scroll,
.CodeMirror-wrap {
  height: 100% !important;
}

.pans.headless {
  height: 100%;

  .pan-head {
    display: none;
  }
}

.pan {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;

  &.active-pan {
    background-color: white;
  }

  .pan-head {
    i.el-icon-caret-bottom {
      vertical-align: middle;
      transform: scale(1.4);
    }

    svg {
      display: none;
    }
  }
}

label.el-checkbox {
  padding: 0 !important;
}

.pan-head-right > svg {
  display: none;
}

#nprogress {
  z-index: 9999;
  position: relative;
}

.el-dropdown-link {
  cursor: pointer;
  user-select: none;
}

.el-dropdown-menu {
  .fake-anchor {
    color: #333;
    text-decoration: none;
    align-items: center;
    display: flex;
    width: 100%;

    svg {
      margin-right: 10px;
      width: 16px;
      height: @width;
      color: #666;
    }
  }
}

.el-badge {
  z-index: 1000;
}

.notie-container {
  z-index: 9999;
}

#HW_frame_cont.HW_visible {
  z-index: 9999;
}

.update-notifier {
  .el-notification__content {
    text-align: left;
  }
}

@media (orientation: landscape) {
  header {
    padding: 0.3rem 0;
    width: 3rem;
    min-height: 100vh;
    flex-direction: column;
    border-right: 1px dashed #048;
  }

  .popper__arrow {
    display: none !important;
  }

  .el-popper {
    max-height: 100%;
  }

  .el-dropdown-menu.el-popper {
    overflow-y: auto;
  }

  .page {
    flex-direction: row;
  }

  .pans.headless {
    height: 100%;
    width: 100%;
  }
}

@media (max-width: 480px), (max-height: 480px) {
  .tippy-popper {
    display: none !important;
  }

  .el-dropdown-menu {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
    max-width: 75vw;
    max-height: 75vh;
    overflow: auto;
    transform-origin: center !important;
    margin: 0 !important;
    justify-content: space-evenly;
  }

  .popper__arrow {
    display: none !important;
  }
}
</style>
