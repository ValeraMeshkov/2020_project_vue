<template>
  <div class="spinner-block">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

$black-color: #000000;
$primary-color: #00da00;
$border-width: 4px;
$basic-spinner-dimensions: 125px; //ширина и высота спиннера
$main-spinner-dimensions: $basic-spinner-dimensions - $border-width * 2; //внешний спиннер
$small-spinner-dimensions: $main-spinner-dimensions * 0.7; //внутренний спиннер

.spinner-block {
  height: 100%;
  min-height: 150px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  .spinner {
    position: relative;
    width: $basic-spinner-dimensions;
    height: $basic-spinner-dimensions;
    transform: scale(0.5);

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      border-width: 4px;
      border-style: solid;
      border-radius: 50%;
    }
  }

  .spinner {
    @keyframes rotate-animation {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes anti-rotate-animation {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(-360deg);
      }
    }

    &:before {
      width: $main-spinner-dimensions;
      height: $main-spinner-dimensions;
      border-bottom-color: $primary-color;
      border-right-color: $primary-color;
      border-top-color: rgba($primary-color, 0);
      border-left-color: rgba($primary-color, 0);
      top: 0px;
      left: 0px;
      animation: rotate-animation 1s linear 0s infinite;
    }

    &:after {
      width: $small-spinner-dimensions;
      height: $small-spinner-dimensions;
      border-bottom-color: $black-color;
      border-right-color: $black-color;
      border-top-color: rgba($black-color, 0);
      border-left-color: rgba($black-color, 0);
      top: ($main-spinner-dimensions - $small-spinner-dimensions) / 2;
      left: ($main-spinner-dimensions - $small-spinner-dimensions) / 2;
      animation: anti-rotate-animation 0.85s linear 0s infinite;
    }
  }
}
</style>
