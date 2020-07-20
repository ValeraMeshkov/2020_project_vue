<template lang="pug">
  div.colors(v-if="colors.length")
    label.container(v-for="(color,index) in colors")
      input(type="radio" :value="color.value" v-model="checkColor")
      .tooltip(v-if="index === tooltipShow") {{color.text}}
      .checkmark
        .inner(
          @mouseover="tooltipShow = index"
          @mouseleave="tooltipShow = ''" 
          :style="{backgroundColor: color.value}")
    div {{checkColor}}
  div(v-else) нет цветов
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
    colors: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      tooltipShow: ""
    };
  },
  computed: {
    checkColor: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("changeValue", val);
      }
    }
    // input: {
    //   get () {
    //     return this.value;
    //   },
    //   set (val) {
    //     this.$emit("input", {
    //       type: this.typeText,
    //       val: val
    //     });
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.colors {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 5px;
  box-sizing: border-box;
  display: block;
  position: relative;
  cursor: pointer;
  display: inline-block;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  top: -50px;
  padding: 10px;
  left: 0;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 5px;
  transform: translateX(calc(-50% + 20px));
  background: black;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -8px;
    z-index: 10;
    left: calc(50% - 8px);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid black;
  }
}

/* Create a custom radio button */
.checkmark {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #eee;
  border-radius: 50%;

  .inner {
    width: 80%;
    height: 80%;
    border-radius: 50%;
  }
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: blueviolet;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  border-radius: 50%;
}
</style>
