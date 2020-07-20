<template lang="pug">
   .phone
    the-mask(
      :value="value"
      mask="+1 (###) ###-####"
      type="tel"
      @blur.native="blur"
    )
</template>

<script>
/**
 * Component InputPhone - InputPhone
 * @module Components/Inputs/InputPhone
 * @vue-prop {Boolean} input
 */
import { mask } from "vue-the-mask";
import { TheMask } from "vue-the-mask";

export default {
  name: "InputPhone",
  components: { TheMask },
  directives: {
    mask
  },
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
  methods: {
    blur(e) {
      if (this.value !== e.target.value)
        this.$emit("input", {
          type: this.typeText,
          val: e.target.value
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.phone {
  position: relative;
  width: fit-content;

  input {
    color: #000;
    padding-left: 35px;
    font-size: 14px;
    @include input;
  }
}
</style>
