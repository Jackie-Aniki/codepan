<template>
  <div
    v-tippy="{ title: 'View compiled' }"
    class="svg-icon"
    @click="handleClick"
  >
    &#x27F3;
  </div>
</template>

<script>
import Event from '@/utils/event'

export default {
  props: {
    type: {
      required: true,
      type: String
    }
  },
  methods: {
    handleClick() {
      Event.$emit('show-compiled-code', this.type)
    }
  }
}
</script>
