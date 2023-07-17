<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select :value="value" v-bind="$attrs" @change="updateValue">
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { foormFieldMixin } from '@/mixins/formFieldMixin'

export default {
  mixins: [foormFieldMixin],
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
}
</script>
