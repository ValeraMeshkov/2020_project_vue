import { getEmptyAds } from "@/api/apiAds.js";

export default {
    setdataBase (state, data) {
        state.dataBase = data;
    },
    setMap (state, data) {
        state.carAds.person.map[data.name] = data.value;
    },
    setCarAdsColor (state, value) {
        state.carAds.car.color = value;
    },
    setCarAdsCar (state, data) {
        state.carAds.car[data.prop] = data.value;
    },
    setImagesAdd (state, data) {
        state.carAds.car.images.push(data);
    },
    setImagesDelete (state, data) {
        state.carAds.car.images.splice(data, 1)
        let isPin = state.carAds.car.images.some(el => el.pin === true);
        if (!isPin && state.carAds.car.images.length) state.carAds.car.images[0].pin = true;
    },
    setImagesMain (state, data) {
        state.carAds.car.images.forEach((el, i) => {
            state.carAds.car.images[i].pin = data === i ? true : false;
        });
    },
    setClearAds (state) {
        state.carAds = {
            id: new Date().getTime(),
            ...getEmptyAds()
        }
    },
}