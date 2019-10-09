import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID de4cb7da24fbf4cd0b1917e3900680eda55a25398451f2bce8467d6ffa13d19e"
  }
});
