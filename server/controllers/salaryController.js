import db from "../db.js";

export const getSalaries = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM employee_salary");
    res.json(rows);
  } catch (error) {
    console.error("Veritabani hatasi", error);
    res
      .status(500)
      .json({ error: "Veritabanına bağlanılamadı veya sorgu hatalı." });
  }
};

export const changeSalary = async (req, res) => {
  const employeeId = req.params.id;
  const { salary } = req.body;

  try {
    const sql = "UPDATE employee_salary SET salary = ? WHERE employee_id = ?";
    const [result] = await db.query(sql, [salary, employeeId]);
    res.json({ message: "Maaş başarıyla güncellendi!", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Veritabanı güncelleme hatası" });
  }
};
