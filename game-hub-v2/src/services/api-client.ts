import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7ff3dac2861a47b2ab90c00a07b3a275",
  },
});
