<template>
  <header>
    <autorun-button />
    <run-button />
    <add-boilerplate />
    <add-library />
    <pan-toggles />
  </header>
</template>

<script>
import PanToggles from '@/components/header/PanToggles.vue'
import AddLibrary from '@/components/header/AddLibrary.vue'
import AddBoilerplate from '@/components/header/AddBoilerplate.vue'
import RunButton from '@/components/header/RunButton.vue'
import AutorunButton from '@/components/header/AutorunButton.vue'

export default {
  components: {
    AddLibrary,
    AddBoilerplate,
    PanToggles,
    RunButton,
    AutorunButton
  }
}
</script>
