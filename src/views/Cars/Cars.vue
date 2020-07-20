<template lang="pug">
  .cars
    .loading(v-if="loading")
      Spinner
    div(
      v-else
      v-for="(car,index) in cars"
      :key="index"
    )
      router-link(tag="div" :to="`/car/${car.id}`")
        .car
          .left
            .text {{car.car.brand}} {{car.car.model}} {{car.car.year}}
            Photo.photo(:images="car.car.images")
          .right
            Icon.close(
              @click="deleteAds(car.id)" 
              icon="close-white" 
              iconHover="close-red" 
              padding="5px" size="20px"
            )
    select(v-model="getPageCount")
        option {{3}}
        option {{5}}
        option {{10}}
        option {{20}}
        option {{50}}
    .Pagination Pagination {{carsLength}} {{ carsCount }}
      vue-ads-pagination(
          :total-items="carsLength"
          :items-per-page="carsCount ? carsCount : 3"
          :max-visible-pages="3"
          :page="carsPage === 0 ? 0 : carsPage - 1"
          @page-change="pageChange")      
</template>

<script>
import { mapState, mapActions } from "vuex";
import Spinner from "@/components/Spinner.vue";
import Photo from "./Components/Photo.vue";
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css';
import VueAdsPagination from "vue-ads-pagination";
import Icon from "@/components/Icon.vue";

export default {
  name: "Home",
  components: {
    VueAdsPagination,
    Spinner,
    Photo,
    Icon
  },
  computed: {
    ...mapState({
      cars: state => state.cars.carsShow,
      carsPage: state => state.cars.carsPage,
      carsCount: state => state.cars.carsCount,
      carsLength: state => state.cars.carsLength
    }),
    getPageCount: {
      get () {
        this.getCarsShow({ count: this.carsCount, page: this.carsPage });
        return this.carsCount;
      },
      set (val) {
        this.changeCarsCount(Number(val));
      }
    }
  },
  watch: {
    cars () {
      this.loading = false;
    }
  },
  data () {
    return {
      loading: true,
      bigImage: 0
    };
  },
  mounted () {
    this.getCarsLength();
  },
  methods: {
    ...mapActions("cars", [
      "getDeleteAds",
      "getCarsShow",
      "changeCarPage",
      "changeCarsCount",
      "getCarsLength",
    ]),
    async deleteAds (id) {
      await this.getDeleteAds(id);
      this.getCarsShow({ count: this.carsCount, page: this.carsPage });
    },
    pageChange (page) {
      this.loading = true;
      this.changeCarPage(page + 1);
      this.getCarsShow({ count: this.carsCount, page: this.carsPage });
    },
    changeShowPhoto (index) {
      this.bigImage = index
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
.Pagination {
  .vue-ads-leading-normal {
    font-size: 16px;
  }

  .hover\:vue-ads-bg-gray-100:hover {
    background-color: #fff;
  }

  .vue-ads-text-white {
    color: #000;
  }

  .vue-ads-w-6 {
    width: 25px;
  }

  .vue-ads-bg-teal-500 {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    background: #00da00;
  }
}
.cars {
  border: 1px solid black;
  .car {
    position: relative;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: rgb(245, 245, 245);
    }
    .left {
      display: flex;
      flex-direction: column;
      align-items: start;

      .text {
        font-weight: 600;
        text-decoration: none !important;
      }
    }
    .right {
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        background: black;
      }
    }
  }
}
</style>
