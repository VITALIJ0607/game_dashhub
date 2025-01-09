import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "db4529e895a14c5c80284e2893ce1498",
  },
});
