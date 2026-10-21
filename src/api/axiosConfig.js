import axios from "axios";

export default axios.create({
  baseURL: "https://capably-parsley-confined.ngrok-free.dev",
  headers: { "ngrok-skip-browser-warning": "true" },
});
