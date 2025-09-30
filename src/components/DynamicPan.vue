<template>
  <html-pan v-if="pan === 'html'" class="pan" />
  <css-pan v-else-if="pan === 'css'" class="pan" />
  <code-pan v-else-if="pan === 'code'" class="pan" />
  <console-pan v-else-if="pan === 'console'" class="pan" />
  <output-pan v-else-if="pan === 'output'" class="pan" />
</template>

<script>
import HTMLPan from '@/components/pans/HTMLPan.vue'
import CodePan from '@/components/pans/CodePan.vue'
import OutputPan from '@/components/pans/OutputPan.vue'
import ConsolePan from '@/components/pans/ConsolePan.vue'
import CSSPan from '@/components/pans/CSSPan.vue'

export default {
  components: {
    'html-pan': HTMLPan,
    'code-pan': CodePan,
    'output-pan': OutputPan,
    'console-pan': ConsolePan,
    'css-pan': CSSPan
  },
  props: ['pan']
}
</script>
