export default {
  setCarAdsCar(state, data) {
    state.carAds.car[data.prop] = data.value;
  },
  setCarId(state, data) {
    state.car = data;
  }
};
