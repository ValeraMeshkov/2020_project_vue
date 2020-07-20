//import { clone } from "@/helpers/helpers.js";

export const emptyAds = {
  person: {
    fio: "",
    email: "",
    phone: "",
    map: {
      city: '',
      subregion: '',
      voblast: ''
    }
  },
  car: {
    images: [],
    brand: "",
    model: "",
    year: "",
    color: ""
  }
}

export const getEmptyAds = function () {
  return JSON.parse(JSON.stringify(emptyAds));
}