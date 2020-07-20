<template lang="pug">
  .block
    .text Выберите город:
    MapBelarus.map(
      :city="map.city"
      :subregion="map.subregion"
      :voblast="map.voblast"
      @map="changeMap"
    )
</template>

<script>
import { mapState, mapActions } from "vuex";
import MapBelarus from "@/components/MapBelarus.vue";

export default {
  name: "Home",
  components: {
    MapBelarus
  },
  props: {},
  mounted() {},
  computed: {
    ...mapState({
      map: state => state.createCar.carAds.person.map
    })
  },
  methods: {
    ...mapActions("createCar", ["getMap"]),
    changeMap(obj) {
      this.getMap(obj);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.block {
  .text {
    display: flex;
    align-items: center;
    color: #42b983;
    font-weight: 600;
  }
  .map {
    width: 400px;
  }
}
</style>
