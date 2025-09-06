<template>
  <section
    class="code-pan"
    :class="{ 'active-pan': isActivePan }"
    :style="style"
    @click="setActivePan('code')"
  >
    <div class="pan-head">
      <el-dropdown trigger="click" @command="setTransformer">
        <span class="el-dropdown-link">
          {{ humanlizedTransformerName }}
          <i class="el-icon-caret-bottom el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="js"> JavaScript </el-dropdown-item>
          <el-dropdown-item command="babel"> Babel </el-dropdown-item>
          <el-dropdown-item command="typescript"> TypeScript </el-dropdown-item>
          <el-dropdown-item command="vue-jsx"> Vue JSX </el-dropdown-item>
          <el-dropdown-item command="svelte"> Svelte </el-dropdown-item>
          <el-dropdown-item command="rust"> Rust </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="pan-head-right">
        <compiled-code-switcher v-if="code.code" type="js" />
      </div>
    </div>
    <textarea id="editor-code" ref="editor" v-model="code.code" />
  </section>
</template>

<script>
import createPan from '@/utils/create-pan'

export default createPan({
  name: 'code',
  editor: {
    mode: 'code',
    autofocus: true,
    autoCloseBrackets: true
  }
})
</script>
