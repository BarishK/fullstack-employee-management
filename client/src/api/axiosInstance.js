import axios from "axios";

const API = axios.create({
  // Canlıya aldığında buraya Render URL'ini, lokalde çalışırken localhost'u yazarız
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://employee-backend-q77y.onrender.com"
      : "http://localhost:5001",
});

export default API;
