<template lang="pug">
  .photo
    img(:src="images[bigImage].img")
    .slider
      .slide(
        v-for="(img,index) in images"
        :key="index"
        @mouseover="changeShowPhoto(index)")
        .show(
          :class="{active: index === bigImage}"
        )
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bigImage: 0
    };
  },
  mounted() {
    this.changeBigImage();
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeShowPhoto(index) {
      this.bigImage = index;
    },
    changeBigImage() {
      this.bigImage = this.images.findIndex(el => el.pin === true);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.photo {
  margin-top: 5px;
  position: relative;
  width: 250px;
  height: 150px;
  object-fit: cover;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .slider {
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    top: 0;
    justify-content: space-between;
    .slide {
      position: relative;
      width: 100%;
      .show {
        position: absolute;
        bottom: 10px;
        width: 50%;
        left: 25%;
        height: 4px;
        border-radius: 5px;
        background-color: #fff;
        opacity: 0.3;
      }
      .active {
        opacity: 0.7;
        background-color: blueviolet;
      }
    }
  }
}
</style>
