<template>
  <div
    @mouseover="active = true"
    @mouseleave="active = false"
    @click.stop="$emit('click')"
    class="icon"
    :style="{
      width: size,
      height: size,
      padding: padding
    }"
  >
    <img
      v-if="active"
      :src="require(`@/assets/ic-${iconHover ? iconHover : icon}.svg`)"
    />
    <img v-else :src="require(`@/assets/ic-${icon}.svg`)" />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    alt: {
      type: String,
      default: "img"
    },
    icon: {
      type: String,
      default: "sync"
    },
    iconHover: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "25px"
    },
    padding: {
      type: String,
      default: "0px"
    }
  },
  data() {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.icon {
  cursor: pointer;
  display: flex;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
