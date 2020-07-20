<template lang="pug">
  div
    input.inputfile(
      id="file"
      type="file"
      name="file"
      multiple
      accept=".jpg, .jpeg, .png"
      :disabled="disabled"
      @change="addImage($event)"
    )
    label(
      :class="{disabled: disabled}"
      for="file"
    )
      Icon(v-if="disabled" icon="add-poster" size="80px")
      Icon(v-else icon="add-poster-disable" size="80px")
</template>

<script>
/**
 * Component InputFileLoadPoster - загрузка нового постера инпут тип файл
 * @module Components/Inputs/InputFileLoadPoster
 * @vue-prop {Boolean} disabled - дизейбл для кнопки добавить изображение
 */
import Icon from "@/components/Icon.vue";

export default {
  name: "InputFileLoadPoster",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Icon
  },
  methods: {
    /**
     * Добавление  и эмит картинки
     * @param {Object} e - евент
     */
    addImage(e) {
      e.target.files.forEach((el, index) => {
        let file = e.target.files[index];
        let filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = e => {
          if (
            e.target.result.indexOf("data:image/jpg") > -1 ||
            e.target.result.indexOf("data:image/jpeg") > -1 ||
            e.target.result.indexOf("data:image/png") > -1
          ) {
            this.$emit("addPoster", {
              img: e.target.result
            });
          }
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

label {
  width: 100%;
  height: 100%;
  background-image: require("@/assets/ic-add-poster.svg");
  //background-image: url("/images/ic-add-poster.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  cursor: pointer;
}

.disabled {
  background-image: url("/images/ic-add-poster-disable.svg");
  cursor: not-allowed;
}
</style>
