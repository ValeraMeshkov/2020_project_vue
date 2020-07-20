<template lang="pug">
  .block 
    .text(:class="{textError: error}") Выберите модель:
      .auto(v-if="car.model") {{car.model}}
      Icon.close(
        v-if="car.model" 
        @click="chooseModel('')" 
        icon="close" 
        iconHover="close-green" 
        size="10px"
      )
    .models(v-if="!car.model")
      div(v-for="(model,index) in getModels" :key="index")
        .model(@click="chooseModel(model)") {{model}}
</template>

<script>
import { mapState, mapActions } from "vuex";
import Icon from "@/components/Icon.vue";

export default {
  name: "Home",
  components: {
    Icon
  },
  props: {
    error: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState({
      dataBase: state => state.createCar.dataBase,
      car: state => state.createCar.carAds.car
    }),
    getModels() {
      let arr = [];
      let brand = this.dataBase.find(el => el.brand === this.car.brand);
      brand.models.forEach(el => arr.push(el.model));
      return arr;
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("createCar", ["getCarAdsCar"]),
    chooseModel(value) {
      this.$emit("chooseModel");
      if (value) {
        this.getCarAdsCar({ prop: "model", value: value });
      } else {
        this.getCarAdsCar({ prop: "model", value: "" });
        this.getCarAdsCar({ prop: "year", value: "" });
      }
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
  .models {
    display: flex;
    flex-wrap: wrap;
    .model {
      font-weight: 600;
      margin: 5px;
      cursor: pointer;
      &:hover {
        color: #42b983;
      }
    }
  }
}
</style>
