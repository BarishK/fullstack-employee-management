import db from "../db.js";

export const getEmployee = async (req, res) => {
  try {
    // db.query ile SQL sorgumuzu gönderiyoruz
    const data = await db.query("SELECT * FROM employee_demographics;");

    // Gelen verileri frontend'e JSON olarak fırlatıyoruz
    res.json(data[0]);
  } catch (error) {
    console.error("Veritabanı hatası:", error);
    res
      .status(500)
      .json({ error: "Veritabanına bağlanılamadı veya sorgu hatalı." });
  }
};

export const addEmployee = async (req, res) => {
  const { employeeName, employeeSurname, employeeBirth, employeeGender } =
    req.body;

  try {
    const [demographicsResult] = await db.query(
      "INSERT INTO employee_demographics (first_name, last_name, birth_date, gender) VALUES (?, ?, ?, ?)",
      [employeeName, employeeSurname, employeeBirth, employeeGender],
    );

    const newEmployeeId = demographicsResult.insertId;

    await db.query(
      "INSERT INTO employee_salary (employee_id, first_name, last_name) VALUES (?, ?, ?)",
      [newEmployeeId, employeeName, employeeSurname],
    );

    res.status(201).json({
      message: "Calisan basariyla eklendi!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Veritabanina ekleme hatasi" });
  }
};

export const deleteEmployee = async (req, res) => {
  const employeeId = req.params.id;

  try {
    await db.query("DELETE FROM employee_salary WHERE employee_id = ?", [
      employeeId,
    ]);

    const [result] = await db.query(
      "DELETE FROM employee_demographics WHERE employee_id = ?",
      [employeeId],
    );

    res.json({ message: "Calisan silindi!", result: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Veritabanindan silme hatasi" });
  }
};

export const getStats = async (req, res) => {
  try {
    const [rows] = await db.query(
      " SELECT COUNT(employee_id) AS total_employees,SUM(salary) AS total_budget,AVG(salary) AS average_salary FROM employee_salary;",
    );

    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Veritabanina baglanilamadi veya sorgu hatali." });
  }
};
