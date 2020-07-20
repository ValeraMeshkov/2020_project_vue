<template lang="pug">
  div
    .text {{car.car.brand}} {{car.car.model}} {{car.car.year}}
    .inputText
      div fio 
      Input(
        :value="car.person.fio"
        typeText="fio" 
        @input="changePerson")
    .inputText
      div phone 
      InputPhone(
        typeText="phone"
        :value="car.person.phone"
        @input="changePerson")
    .inputText
      div email
      InputEmail(
        typeText="email"
        :value="car.person.email"
        @input="changePerson")
    .redact
      .photos
        .photo(
          v-for="(img, index) in car.car.images" 
          :key="index"
          :class="{isPin: img.pin}")
          img(
            :src="img.img"
            @click="changeMainPhoto(index)")
          Icon.close(
            @click="deletePhoto(index)" 
            icon="close-white" 
            iconHover="close-red" 
            padding="5px" 
            size="20px")
        InputFileLoadPoster.photoLoad(
          :class="{'disabled': car.car.images.length >= 20}"
          :disabled="car.car.images.length >= 20"
          @addPoster="addPoster")
    ButtonStandart(
        text="Сохранить" 
        @click="saveCar")        
</template>

<script>
import { mapState, mapActions } from "vuex";
import ButtonStandart from "@/components/Button/Standart.vue";
import Input from "@/components/Input/Input.vue";
import InputPhone from "@/components/Input/InputPhone.vue";
import InputEmail from "@/components/Input/InputEmail.vue";
import InputFileLoadPoster from "@/components/Input/InputFileLoadPoster.vue";
import Icon from "@/components/Icon.vue";

export default {
  name: "Home",
  components: {
    ButtonStandart,
    Input,
    InputPhone,
    InputEmail,
    InputFileLoadPoster,
    Icon
  },
  data () {
    return {
    };
  },
  mounted () {
  },
  computed: {
    ...mapState({
      car: state => state.car.car
    })
  },
  watch: {
    car () {

    }
  },
  methods: {
    ...mapActions("car", [
      "putCar",
    ]),
    changePerson (obj) {
      this.car.person[obj.type] = obj.val;
    },
    saveCar () {
      this.$emit('loading')
      this.putCar(this.car);
    },
    addPoster (img) {
      let isPin = this.car.car.images.some(el => {
        return el.pin === true;
      });
      this.car.car.images.push({
        img: img.img,
        pin: isPin ? false : true
      });
    },
    changeMainPhoto (index) {
      this.car.car.images.forEach((el, i) => {
        if (index === i) {
          this.car.car.images[i].pin = true;
        } else {
          this.car.car.images[i].pin = false;
        }
      });
    },
    deletePhoto (index) {
      this.car.car.images.splice(index, 1)
      let isPin = this.car.car.images.some(el => {
        return el.pin === true;
      });
      if (!isPin && this.car.car.images.length) {
        this.car.car.images[0].pin = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
div {
  .text {
    text-align: left;
    font-weight: 600;
  }
  .inputText {
    display: flex;
    align-items: center;
    margin: 5px 0 0 0;
    .text {
      display: flex;
      align-items: center;
      div {
        margin-left: 5px;
      }
    }
  }
  .redact {
    .photos {
      display: flex;
      flex-wrap: wrap;
      .photo {
        border: 2px solid #fff;
        border-radius: 10px;
        overflow: hidden;
        margin: 5px;
        width: 150px;
        height: 100px;
        cursor: pointer;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .close {
          position: absolute;
          background-color: black;
          right: 5px;
          top: 5px;
          border-radius: 5px;
        }
      }
      .isPin {
        border: 2px solid blueviolet;
      }
      .photoLoad {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px 10px;
        width: 80px;
        height: 100%;
      }
    }
  }
}
</style>
