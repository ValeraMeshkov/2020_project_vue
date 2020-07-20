<template lang="pug">
  .loading(v-if="!dataBase.length")
    Spinner
  .create(v-else)
    div {{carAds}}
    Brands(
      :error="error.brand"
      @chooseBrand="error.brand = false")
    Models(
      v-if="carAds.car.brand"
      :error="error.model" 
      @chooseModel="error.model = false")
    Years(
      v-if="carAds.car.model"
      :error="error.year" 
      @chooseYear="error.year = false")
    Images(
      @chooseImages="error.images = false"
      :error="error.images")
    Colors
    Places
    ButtonStandart(text="Добавить" @click="addCar")
</template>

<script>
import { mapState, mapActions } from "vuex";

import Spinner from "@/components/Spinner.vue";
import Brands from "./Components/Brands.vue";
import Models from "./Components/Models.vue";
import Years from "./Components/Years.vue";
import Images from "./Components/Images.vue";
import Colors from "./Components/Colors.vue";
import Places from "./Components/Places.vue";
import ButtonStandart from "@/components/Button/Standart.vue";

export default {
  name: "Home",
  components: {
    Spinner,
    Brands,
    Models,
    Years,
    Images,
    Colors,
    Places,
    ButtonStandart
  },
  computed: {
    ...mapState({
      dataBase: state => state.createCar.dataBase,
      carAds: state => state.createCar.carAds
    })
  },
  data() {
    return {
      error: {
        brand: false,
        model: false,
        year: false,
        images: false
      }
    };
  },
  mounted() {
    this.getDataBase();
  },
  methods: {
    ...mapActions("createCar", ["addNewAds", "getDataBase"]),
    async addCar() {
      if (!this.carAds.car.brand) {
        this.error.brand = true;
      } else if (!this.carAds.car.model) {
        this.error.model = true;
      } else if (!this.carAds.car.year) {
        this.error.year = true;
      }
      if (!this.carAds.car.images.length) {
        this.error.images = true;
      }
      for (const key in this.error) {
        if (this.error[key] === true) return;
      }
      await this.addNewAds();
      this.$router.push("/cars");
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
.create {
  display: flex;
  flex-direction: column;
  align-items: start;
  .error {
    margin: 0 5px;
    font-size: 12px;
    color: red;
  }
}
</style>
