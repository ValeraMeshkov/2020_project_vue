<template lang="pug">
  button(@click="$emit('click')") {{text}}
</template>

<script>
/**
 * Component Standart - стандартная кнопка
 * @module Components/Button/Standart
 */
export default {
  name: "Standart",
  props: {
    text: {
      type: String,
      default: "text"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

button {
  cursor: pointer;
  padding: 5px;
  margin: 5px;
}
</style>
