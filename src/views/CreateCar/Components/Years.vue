<template lang="pug">
  .block 
    .text(:class="{textError: error}") Выберите год:
      .auto(v-if="car.year") {{car.year}}
      Icon.close(
        v-if="car.year" 
        @click="chooseYear('')" 
        icon="close" 
        iconHover="close-green" 
        size="10px"
      )
    .years(v-if="!car.year")
      div(v-for="(year,index) in getYears" :key="index")
        .year(@click="chooseYear(year)") {{year}}
</template>

<script>

import { mapState, mapActions } from "vuex";
import Spinner from "@/components/Spinner.vue";
import Icon from "@/components/Icon.vue";

export default {
  name: "Home",
  components: {
    Spinner,
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
    getYears () {
      let arr = [];
      let thisBrand = this.dataBase.find((el) => el.brand === this.car.brand)
      let thisModel = thisBrand.models.find((el) => el.model === this.car.model)
      thisModel.years.forEach(el => arr.push(el.year));
      return arr
    }
  },
  data () {
    return {
    };
  },
  methods: {
    ...mapActions("createCar", ["getCarAdsCar"]),
    chooseYear (value) {
      this.$emit("chooseYear")
      if (value) {
        this.getCarAdsCar({ prop: 'year', value: value })
      } else {
        this.getCarAdsCar({ prop: 'year', value: '' })
      }
    },
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
  .years {
    display: flex;
    flex-wrap: wrap;
    .year {
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
