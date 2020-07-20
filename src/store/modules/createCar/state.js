import { getEmptyAds } from "@/api/apiAds.js";

export default {
  carAds: {
    id: new Date().getTime(),
    ...getEmptyAds()
  },
  dataBase: []
};