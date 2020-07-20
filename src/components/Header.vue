<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/animate">Animate</router-link> |
    <router-link to="/cars">Cars</router-link> |
    <router-link to="/create">Create</router-link>
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

#nav {
  padding: 30px;
  border-bottom: 1px solid black;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
