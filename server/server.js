import express from "express";
import cors from "cors";
import db from "./db.js";
import cron from "node-cron";

import employeeRoutes from "./routes/employeeRoutes.js";
import salaryRoutes from "./routes/salaryRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";

const app = express();
const PORT = 5001;

app.use(cors());

app.use(express.json());

cron.schedule("*/15 * * * *", async () => {
  console.log("Veritabanı temizlik robotu çalışmaya başladı...");

  try {
    await db.query("SET FOREIGN_KEY_CHECKS = 0");

    await db.query("TRUNCATE TABLE employee_salary");
    await db.query("TRUNCATE TABLE employee_demographics");

    await db.query("SET FOREIGN_KEY_CHECKS = 1");

    const demoQuery =
      "INSERT INTO employee_demographics (employee_id, first_name, last_name, age, gender, birth_date) VALUES ?";

    const sampleDemographics = [
      [1, "Leslie", "Knope", 42, "Female", "1984-05-03"],
      [2, "Ron", "Swanson", 50, "Male", "1976-09-06"],
      [3, "Tom", "Haverford", 33, "Male", "1993-11-01"],
      [4, "April", "Ludgate", 29, "Female", "1997-04-08"],
      [5, "Andy", "Dwyer", 35, "Male", "1991-06-12"],
      [6, "Ann", "Perkins", 38, "Female", "1988-02-20"],
      [7, "Chris", "Traeger", 45, "Male", "1981-10-14"],
      [8, "Ben", "Wyatt", 43, "Male", "1983-03-26"],
      [9, "Jerry", "Gergich", 61, "Male", "1980-02-28"],
      [10, "Donna", "Meagle", 44, "Female", "1982-07-16"],
      [11, "Craig", "Middlebrooks", 36, "Male", "1990-01-05"],
      [12, "Mark", "Brendanawicz", 41, "Male", "1985-08-22"],
    ];
    await db.query(demoQuery, [sampleDemographics]);

    const salaryQuery =
      "INSERT INTO employee_salary (employee_id, first_name, last_name, occupation, salary, dept_id) VALUES ?";

    const sampleSalaries = [
      [1, "Leslie", "Knope", "Deputy Director", 75000, 1],
      [2, "Ron", "Swanson", "Director", 90000, 1],

      [3, "Tom", "Haverford", "Administrator", 50000, 2],
      [4, "April", "Ludgate", "Assistant to Director", 40000, 2],
      [5, "Andy", "Dwyer", "Security & Groundkeeper", 35000, 2],

      [6, "Ann", "Perkins", "Public Health Nurse", 65000, 3],
      [7, "Chris", "Traeger", "City Manager", 110000, 3],

      [8, "Ben", "Wyatt", "State Auditor", 95000, 4],
      [12, "Mark", "Brendanawicz", "City Planner", 70000, 4],

      [9, "Jerry", "Gergich", "Office Manager", 45000, 5],
      [10, "Donna", "Meagle", "Office Permit Secretary", 60000, 5],

      [11, "Craig", "Middlebrooks", "Superintendent", 55000, 6],
    ];

    await db.query(salaryQuery, [sampleSalaries]);

    console.log(
      "Her iki tablo da başarıyla temizlendi ve Parks & Rec verileri yüklendi!",
    );
  } catch (err) {
    console.error("❌ Temizlik esnasında bir hata oluştu:", err);
  }
});

app.use("/employees", employeeRoutes);
app.use("/salary", salaryRoutes);
app.use("/departments", departmentRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
