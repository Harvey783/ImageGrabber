import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 405c43e3ed5b9032ae9a5c9094ef52e385688e050868a8058e186d4838e05b60"
  }
});
