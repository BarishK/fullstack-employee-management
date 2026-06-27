import express from "express";
import cors from "cors";

import employeeRoutes from "./routes/employeeRoutes.js";
import salaryRoutes from "./routes/salaryRoutes.js";

const app = express();
const PORT = 5001;

// 2. CORS AYARI (Express middleware olarak ekliyoruz)
app.use(cors()); // Geçici olarak parantez içini boş bırak, herkes erişebilsin

// Express'in gelen JSON isteklerini anlaması için bu da şarttır:
app.use(express.json());

app.use("/employees", employeeRoutes);
app.use("/salary", salaryRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
