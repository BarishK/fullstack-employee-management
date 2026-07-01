import db from "../db.js";

export const getDepartments = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM parks_departments");
    res.json(rows);
  } catch (error) {
    console.error("Veritabani hatasi", error);
    res
      .status(500)
      .json({ message: "Veritabani hatasi!", error: error.message });
  }
};

export const getDepartmentByID = async (req, res) => {
  const deptID = req.params.id;
  const sql = "SELECT * FROM employee_salary WHERE dept_id = ?";

  try {
    const [rows] = await db.query(sql, [deptID]);
    res.json(rows);
  } catch (error) {
    console.error("Veritabani hatasi", error);
    res
      .status(500)
      .json({ message: "Veritabani hatasi!", error: error.message });
  }
};
