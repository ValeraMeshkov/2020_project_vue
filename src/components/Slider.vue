<template>
  <hooper
    class="hooper"
    :style="{
      width: hooperWidth,
      height: hooperHeight
    }"
    :class="{
      onePhoto: images.length === 1,
      twoPhoto: images.length === 2
    }"
    :itemsToShow="
      images.length === 1 ? 1 : images.length === 2 ? 2 : itemsToShow
    "
  >
    <slide v-for="(image, index) in images" :key="index" class="slide">
      <img @click="$emit('chooseCar', index)" :src="image.img" />
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "Header",
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    itemsToShow: {
      type: Number,
      default: 3
    },
    hooperWidth: {
      type: String,
      default: "800px"
    },
    hooperHeight: {
      type: String,
      default: "120px"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.hooper {
  .slide {
    height: 100%;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-self: center;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.onePhoto {
  max-width: 25%;
}
.twoPhoto {
  max-width: 50%;
}
</style>
