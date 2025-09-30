<template>
  <div v-tippy="{ title: 'View compiled' }" @click="handleClick">
    <strong> &#x27F3; </strong>
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
