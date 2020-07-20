<template lang="pug">
  .block 
    .text(:class="{textError: error}") Выберите бренд:
      .auto(v-if="brand") {{brand}}
      Icon.close(
        v-if="brand" 
        @click="chooseBrand('')" 
        icon="close" 
        iconHover="close-green" 
        size="10px"
      )
      Input(v-else :lazy="false" @input="changeInputBrand")
    .brands(v-if="!brand")
      div(v-for="(brand,index) in getBrands" :key="index")
        .brand(@click="chooseBrand(brand)") {{brand}}
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "@/components/Input/Input.vue";
import Icon from "@/components/Icon.vue";

export default {
  name: "Home",
  components: {
    Input,
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
      brand: state => state.createCar.carAds.car.brand
    }),
    getBrands() {
      let arr = [];
      this.dataBase.forEach(el => {
        if (el.brand.toLowerCase().indexOf(this.inputBrand) !== -1) {
          arr.push(el.brand);
        }
      });
      return arr;
    }
  },
  data() {
    return {
      inputBrand: ""
    };
  },
  methods: {
    ...mapActions("createCar", ["getCarAdsCar"]),
    chooseBrand(value) {
      this.$emit("chooseBrand");
      if (value) {
        this.getCarAdsCar({ prop: "brand", value: value });
      } else {
        this.getCarAdsCar({ prop: "brand", value: "" });
        this.getCarAdsCar({ prop: "model", value: "" });
        this.getCarAdsCar({ prop: "year", value: "" });
      }
    },
    changeInputBrand(obj) {
      this.inputBrand = obj.val.toLowerCase();
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
  .brands {
    display: flex;
    flex-wrap: wrap;
    .brand {
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
