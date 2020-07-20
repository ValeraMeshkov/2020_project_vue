import { clone } from "@/helpers/helpers.js";
import axios from "axios";
const URL = "http://localhost:3000";

export default {
  async getDeleteAds (context, id) {
    context.commit("setCarsShow", []);
    return await axios.delete(`${URL}/cars/${id}`);
  },
  async getCarsShow (context, obj) {
    let newArr = [];
    const res = await axios.get(`${URL}/cars`);
    for (let i = obj.count * obj.page - obj.count; i < obj.count * obj.page; i++) {
      if (res.data[i]) {
        newArr.push(clone(res.data[i], true));
      }
    }
    context.commit("setCarsShow", newArr);
  },
  async getCarsLength (context) {
    const res = await axios.get(`${URL}/cars`);
    context.commit("setCarsLength", res.data.length);
  },
  changeCarPage (context, page) {
    context.commit("setCarsPage", page);
  },
  changeCarsCount (context, count) {
    context.commit("setCarsCount", count);
  },

}