<template>
  <div id="app">
    <Header class="header" />

    <div class="wrapper">
      <div class="content">
        <router-view />
      </div>

      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;

  .header {
    height: $header-height;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
  }

  .wrapper {
    position: fixed;
    top: $header-height;
    width: 100%;
    height: calc(100vh - #{$header-height});
    box-sizing: border-box;
    overflow-y: auto;

    .content {
      position: relative;
      min-height: calc(100vh - #{$footer-height} - #{$header-height});
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
    }

    .footer {
      position: relative;
      height: $footer-height;
      box-sizing: border-box;
      width: 100%;
    }
  }
}
</style>
