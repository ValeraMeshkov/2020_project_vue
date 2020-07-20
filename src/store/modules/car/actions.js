import axios from "axios";
const URL = "http://localhost:3000";

export default {
  getCarAdsCar (context, obj) {
    context.commit("setCarAdsCar", obj);
  },
  async getCarId (context, id) {
    let res = await axios.get(`${URL}/cars/${id}`);
    setTimeout(() => {
      context.commit("setCarId", res.data && res.data.id ? res.data : "error");
    }, 300);
  },
  async putCar (context, car) {
    let res = await axios.put(`${URL}/cars/${car.id}`, car);
    context.dispatch("getCarId", res.data.id);
  },
}