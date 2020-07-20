<template lang="pug">
    input(v-model.lazy="input")
</template>

<script>
/**
 * Component Input - Input
 * @module Components/Inputs/Input
 * @vue-prop {Boolean} input
 */

export default {
  name: "Input",
  props: {
    value: {
      type: String,
      default: ""
    },
    typeText: {
      type: String,
      default: ""
    }
  },
  computed: {
    input: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", {
          type: this.typeText,
          val: val
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
input {
  @include input;
}
</style>
