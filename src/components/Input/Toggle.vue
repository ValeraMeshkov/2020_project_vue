<template lang="pug">
  label.switch(:class="{'disabled': disabled}")
    input(
      v-model="toggle"
      type="checkbox"
      :disabled="disabled"
      @change="click($event)")
    span(class="slider round")
</template>

<script>
/**
 * Component InputToggle - радио тоггл (переключатель)
 * @module Components/Inputs/Toggle
 * @vue-data {Boolean} toggle - переключатель в позиции on / off
 */

export default {
  name: "Toggle",
  props: {
    initialValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggle: this.initialValue
    };
  },
  methods: {
    /**
     * Эмитим открывание / закрывание радио переключателя
     */
    click() {
      if (!this.disabled) this.$emit("toogle", this.toggle);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.toggle {
  display: flex;
}

.switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 20px;
}

.switch.disabled {
  .slider {
    cursor: not-allowed;
  }

  .slider.round {
    background-color: #f2f2f7;
  }

  input:checked + .slider {
    background-color: $positive;
  }
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $light;
  border: 1px solid $dark;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 3px;
  background-color: $dark;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: $positive;
}

input:checked + .slider:before {
  transform: translateX(16px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
