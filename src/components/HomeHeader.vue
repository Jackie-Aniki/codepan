<template>
  <header class="home-header">
    <run-button />
    <autorun-button />
    <pan-toggles />
    <span class="home-header-left-item changelog-indicator" />
    <add-boilerplate />
    <add-library />
    <save-gist />
  </header>
</template>

<script>
import PanToggles from '@/components/header/PanToggles.vue'
import AddLibrary from '@/components/header/AddLibrary.vue'
import AddBoilerplate from '@/components/header/AddBoilerplate.vue'
import RunButton from '@/components/header/RunButton.vue'
import AutorunButton from '@/components/header/AutorunButton.vue'
import SaveGist from '@/components/header/SaveGist.vue'

export default {
  components: {
    AddLibrary,
    AddBoilerplate,
    PanToggles,
    RunButton,
    AutorunButton,
    SaveGist
  }
}
</script>
