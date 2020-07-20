<template>
  <div class="animate">
    <div class="block">
      <div>
        Загрузка в блоке
        <InputToggle @toogle="loadingToggle" />
      </div>

      <Spinner v-if="loading" />

      <div v-else>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore
        sunt vitae placeat. Ad deserunt soluta illo earum beatae nobis
        laudantium impedit harum libero? Reiciendis hic numquam libero rem
        cumque pariatur doloribus ipsum odit! Corporis provident voluptatem
        mollitia voluptatibus at maiores, aliquid ea dolores dolor? Laudantium
        molestias eaque, maiores in quam tenetur velit corporis earum cupiditate
        culpa labore cumque quaerat magnam id quo totam dicta voluptatem enim
        optio atque quae commodi explicabo. Beatae aperiam totam alias
        voluptatibus quasi, voluptas dolorem necessitatibus. Placeat nisi
        debitis ea dolorem laboriosam totam pariatur non iure, et laudantium
        expedita, provident dolor. Blanditiis libero nobis esse!
      </div>
    </div>

    <div class="block">
      <div class="notify">
        Вывод нотификаций
        <notifications group="socialAuth" />

        <ButtonStandart
          @click="clickNotifySuccess"
          text="Вывести нотификацию успешную"
        />

        <ButtonStandart
          @click="clickNotifyError"
          text="Вывести нотификацию с ошибкой"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import InputToggle from "@/components/Input/Toggle.vue";
import ButtonStandart from "@/components/Button/Standart.vue";

export default {
  components: {
    Spinner,
    InputToggle,
    ButtonStandart
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    loadingToggle(toogle) {
      this.loading = toogle;
    },
    clickNotifySuccess() {
      this.$notify({
        group: "socialAuth",
        title: "Успех!!!",
        text: "Мы вывели нотификацию успешную",
        closeOnClick: true,
        type: "success"
      });
    },
    clickNotifyError() {
      this.$notify({
        group: "socialAuth",
        title: "Ошибка",
        text: "Мы вывели нотификацию с ошибкой",
        closeOnClick: true,
        type: "error"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.animate {
  .block {
    position: relative;
    margin: 10px;
    border: 1px solid black;
    padding: 10px;

    .notify {
      display: flex;
      flex-direction: column;
      width: 200px;
    }
  }
}
</style>
