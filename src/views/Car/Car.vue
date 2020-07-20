<template lang="pug">
  .loading(v-if="loading")
    Spinner
  .div(v-else)
    .car(v-if="car && car.id")
      Redact(
        v-if="isOpenRedact"
        @loading="loading = true"
      ) 
      NotRedact(
        v-else
        @isOpenRedact="isOpenRedact = true"
      )
    div(v-else) Не найдено такого авто
</template>

<script>
import { mapState, mapActions } from "vuex";
import Spinner from "@/components/Spinner.vue";
import Redact from "./Components/Redact.vue";
import NotRedact from "./Components/NotRedact.vue";

export default {
  name: "Home",
  components: {
    Spinner,
    Redact,
    NotRedact
  },
  data () {
    return {
      loading: true,
      isOpenRedact: false,
      redactCar: {
        person: {
          fio: "",
          phone: "",
          email: ""
        }
      }
    };
  },
  mounted () {
    this.getCarId(this.$route.params.id);
  },
  computed: {
    ...mapState({
      car: state => state.car.car
    })
  },
  watch: {
    car () {
      this.isOpenRedact = false;
      this.loading = false;
    }
  },
  methods: {
    ...mapActions("car", [
      "getCarId",
    ]),
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
  .car {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 5px;

    .top {
      font-weight: 600;
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
  }
}
</style>
