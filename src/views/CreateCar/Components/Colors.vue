<template lang="pug">
  .block 
    .text Выберите цвет:
    RadioColors(:colors="colors" :value="color" @changeValue="changeColor")
</template>

<script>
import { mapState, mapActions } from "vuex";
import RadioColors from "@/components/Input/RadioColors.vue";

export default {
  name: "Home",
  components: {
    RadioColors
  },
  props: {},
  mounted() {
    this.getColors();
  },
  computed: {
    ...mapState({
      colors: state => state.colors,
      color: state => state.createCar.carAds.car.color
    })
  },
  methods: {
    ...mapActions({
      getColors: "getColors"
    }),
    ...mapActions("createCar", ["getCarAdsColor"]),
    changeColor(val) {
      this.getCarAdsColor(val);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.block {
  display: flex;
  align-items: center;
  margin: 5px;
  .text {
    display: flex;
    align-items: center;
    color: #42b983;
    font-weight: 600;
  }
}
</style>
