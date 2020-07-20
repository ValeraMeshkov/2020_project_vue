<template lang="pug">
  div 
    .top 
      .redact {{car.car.brand}} {{car.car.model}} {{car.car.year}}
      Icon.redactIcon(
        @click="$emit('isOpenRedact')" 
        icon="pencil" 
        iconHover="pencil-grey" 
        padding="5px"
        size="40px")
    .images 
      .bigImg
        img(:src="`${car.car.images[bigImage].img}`")
      Slider.slider(
        @chooseCar="changeBigImage" 
        :images="car.car.images")  
</template>

<script>
import { mapState } from "vuex";
import Icon from "@/components/Icon.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    Icon,
    Slider
  },
  data() {
    return {
      bigImage: 0
    };
  },
  mounted() {
    this.getBigImage();
  },
  computed: {
    ...mapState({
      car: state => state.car.car
    })
  },
  methods: {
    getBigImage() {
      this.bigImage = this.car.car.images.findIndex(el => el.pin);
    },
    changeBigImage(val) {
      this.bigImage = val;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";

.loading {
  width: 100%;
  height: 100%;
  position: absolute;
}
div {
  .top {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    .redactIcon {
      position: absolute;
      right: 20px;
    }
  }
  .inputText {
    display: flex;
    margin: 5px 0 0 0;
    .text {
      display: flex;
      align-items: center;
      div {
        margin-left: 5px;
      }
    }
  }
  .images {
    .bigImg {
      width: 400px;
      height: 200px;
      margin-top: 5px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .slider {
      margin-top: 5px;
    }
  }
}
</style>
