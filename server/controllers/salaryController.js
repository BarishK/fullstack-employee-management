import db from "../db.js";

export const getSalaries = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM employee_salary");

    res.json(data[0]);
  } catch (error) {
    console.error("Veritabani hatasi", error);
    res
      .status(500)
      .json({ error: "Veritabanına bağlanılamadı veya sorgu hatalı." });
  }
};

export const changeSalary = async (req, res) => {
  const employeeId = req.params.id; // URL'den gelen id (örn: 5)
  const { salary } = req.body; // Axios ile gönderdiğimiz yeni maaş

  try {
    // MySQL sorgumuz ile sadece o ID'ye sahip çalışanın maaşını güncelliyoruz
    const [result] = await db.query(
      "UPDATE employee_salary SET salary = ? WHERE employee_id = ?",
      [salary, employeeId],
    );

    res.json({ message: "Maaş başarıyla güncellendi!", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Veritabanı güncelleme hatası" });
  }
};
