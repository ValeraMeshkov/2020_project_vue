<template lang="pug">
  .block 
    .text(:class="{textError: error}") Загрузите фотографии :
    .photos
      .photo(
        v-for="(image, index) in car.images" 
        :key="index"
        :class="{isPin: image.pin}")
        img(
          :src="image.img"
          @click="changeMainPhoto(index)"
        )
        Icon.close(
          @click="deletePhoto(index)" 
          icon="close-white" 
          iconHover="close-red" 
          padding="5px" size="20px"
        )
    InputFileLoadPoster.photoLoad(
      :class="{'disabled': car.images.length >= 15}"
      :disabled="car.images.length >= 15"
      @addPoster="addPoster")    
</template>

<script>
import { mapState, mapActions } from "vuex";
import Icon from "@/components/Icon.vue";
import InputFileLoadPoster from "@/components/Input/InputFileLoadPoster.vue";

export default {
  name: "Home",
  components: {
    Icon,
    InputFileLoadPoster
  },
  computed: {
    ...mapState({
      car: state => state.createCar.carAds.car
    }),
  },
  props: {
    error: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapActions("createCar", [
      "imagesAdd",
      "imagesDelete",
      "imagesMain"
    ]),
    addPoster (img) {
      this.$emit("chooseImages")
      this.imagesAdd({
        img: img.img,
        pin: this.car.images.length ? false : true
      })
    },
    changeMainPhoto (index) {
      this.imagesMain(index)
    },
    deletePhoto (index) {
      this.imagesDelete(index)
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

.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
  .text {
    display: flex;
    align-items: center;
    color: #42b983;
    font-weight: 600;
    .auto {
      margin-left: 10px;
    }
    .close {
      margin: 0 0 10px 5px;
    }
    input {
      margin-left: 10px;
      width: 150px;
    }
  }
  .textError {
    color: red;
  }
  .photos {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;

    .photo {
      position: relative;
      width: 150px;
      height: 80px;
      margin: 5px;
      border: 2px solid #fff;
      cursor: pointer;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .close {
        position: absolute;
        right: 3px;
        top: 3px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        background: black;
      }
    }
    .isPin {
      border: 2px solid blueviolet;
    }
    .photoLoad {
      width: 80px;
      height: 80px;
      margin: 5px;
      border: 2px solid #fff;
    }
  }
}
</style>
