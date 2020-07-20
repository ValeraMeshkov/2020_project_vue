import axios from "axios";
const URL = "http://localhost:3000";

export default {
  /**
   * Запрос статистики для конкретных трансляции
   * @param {Object} params - Параметры запроса
   * @param {Array} params.names - [uuid, uuid2, uui3]
   * @returns {Promise}
   */
  getCarAdsCar (context, obj) {
    context.commit("setCarAdsCar", obj);
  },
  getMap (context, obj) {
    context.commit("setMap", obj);
  },
  getCarAdsColor (context, value) {
    context.commit("setCarAdsColor", value);
  },
  imagesAdd (context, data) {
    context.commit("setImagesAdd", data);
  },
  imagesDelete (context, data) {
    context.commit("setImagesDelete", data);
  },
  imagesMain (context, data) {
    context.commit("setImagesMain", data);
  },
  async getDataBase (context) {
    const res = await axios.get(`${URL}/dataBase`);
    context.commit("setdataBase", res.data);
  },
  async addNewAds (context) {
    await axios.post(`${URL}/cars`, context.state.carAds);
    context.commit("setClearAds");
  }
}