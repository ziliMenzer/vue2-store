<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input type="text" :value="value" v-bind="$attrs" @input="updateValue" />
  </div>
</template>

<script>
import { foormFieldMixin } from '@/mixins/formFieldMixin'
export default {
  mixins: [foormFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      }
    },
  },
}
</script>
