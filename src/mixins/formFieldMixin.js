export const foormFieldMixin ={
inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  } 
}