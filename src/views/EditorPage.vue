<template>
  <div
    class="page"
    :class="{ readonly: isReadOnly, headless: urlParams.headless === 'true' }"
  >
    <home-header v-if="urlParams.headless !== 'true'" />

    <aside class="dialogs">
      <compiled-code-dialog
        v-if="code.code"
        v-model:show="showCompiledCode.code"
        :code="code"
        highlight="javascript"
        type="code"
      />

      <compiled-code-dialog
        v-if="html.code"
        v-model:show="showCompiledCode.html"
        :code="html"
        highlight="htmlmixed"
        type="html"
      />

      <compiled-code-dialog
        v-if="css.code"
        v-model:show="showCompiledCode.css"
        :code="css"
        highlight="css"
        type="css"
      />
    </aside>

    <div
      :class="{
        pans: true,
        [urlParams.layout]: true,
        headless: urlParams.headless === 'true'
      }"
      :style="{ flexDirection: urlParams.layout }"
    >
      <dynamic-pan v-for="pan in visiblePans" :key="pan" :pan="pan" />

      <dynamic-pan
        v-if="!visiblePans.includes('output')"
        :key="'output'"
        :pan="'output'"
        style="display: none"
      />
    </div>
  </div>
</template>

<script>
import progress from 'nprogress'
import { mapState, mapActions } from 'vuex'
import notie from 'notie'
import isElectron from 'is-electron'
import { inIframe } from '@/utils'
import Event from '@/utils/event'
import HomeHeader from '@/components/HomeHeader.vue'
import DynamicPan from '@/components/DynamicPan.vue'
import CompiledCodeDialog from '@/components/CompiledCodeDialog.vue'

async function handleRouteChange(to, from, vm) {
  if (from.path !== to.path) {
    switch (to.name) {
      case 'home':
        await vm.setBoilerplate(to.query.boilerplate)
        await vm.setGist(to.query.gist)
        break
      case 'boilerplate':
        await vm.setBoilerplate(to.params.boilerplate)
        break
      case 'gist':
        await vm.setGist(to.params.gist)
        break
    }
  }

  Event.$emit('refresh-editor')
  Event.$emit('run')

  await vm.setAutoRun(true)

  progress.done()
}

export default {
  name: 'EditorPage',
  data() {
    return {
      showCompiledCode: {
        code: false,
        css: false,
        html: false
      },
      isReadOnly: 'readonly' in this.$route.query
    }
  },
  computed: {
    ...mapState([
      'visiblePans',
      'editorStatus',
      'code',
      'css',
      'html',
      'urlParams'
    ])
  },
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      await handleRouteChange(to, from, vm)
    })
  },
  async beforeRouteUpdate(to, from, next) {
    await handleRouteChange(to, from, this)
    next()
  },
  mounted() {
    window.addEventListener('storage', this.handleStorageChanged)

    window.addEventListener('beforeunload', (e) => {
      if (!inIframe && !isElectron() && this.editorStatus !== 'saved') {
        e.returnValue = false
        return false
      }
    })

    // Since in prevous versions we didn't fetch userMeta after login
    // We need to force user to re-login in order to get that data
    if (
      this.$store.state.githubToken &&
      Object.keys(this.$store.state.userMeta).length === 0
    ) {
      this.$store.dispatch('setGitHubToken', null).then(() => {
        notie.alert({
          type: 'warning',
          text: `You need to login again to use the new version!`
        })
      })
    }
  },
  created() {
    Event.$on('refresh-editor', () => this.refreshFromUrl())
    Event.$on('show-compiled-code', (type) => {
      this.showCompiledCode[type] = true
    })
  },
  methods: {
    ...mapActions([
      'setBoilerplate',
      'setGist',
      'showPans',
      'setAutoRun',
      'refreshFromUrl'
    ]),
    isVisible(pan) {
      return this.visiblePans.indexOf(pan) !== -1
    },
    handleStorageChanged(e) {
      if (e.key === 'codepan:gh-token' && e.newValue) {
        this.$store.dispatch('setGitHubToken', e.newValue)
        if (inIframe) {
          notie.confirm({
            text: 'Success, reload this iframe?',
            submitCallback() {
              window.location.reload()
            }
          })
        } else {
          notie.alert({
            type: 'success',
            text: 'Successfully logged in with GitHub!'
          })
        }
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.handleStorageChanged)
  },
  components: {
    HomeHeader,
    DynamicPan,
    CompiledCodeDialog
  }
}
</script>

<style src="codemirror/lib/codemirror.css"></style>
<style src="codemirror/addon/fold/foldgutter.css"></style>
