<template>
  <div>
    This is footer This is footer This is footer This is footer
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

div {
  padding: 30px;
  border-top: 1px solid black;
}
</style>
