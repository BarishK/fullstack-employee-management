import db from "../db.js";

export const getDepartments = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM parks_departments");

    res.json(data[0]);
  } catch (error) {
    console.error("Veritabani hatasi", error);
    res.json({ message: "Veritabani hatasi!", error: error });
  }
};

export const getDepartmentByID = async (req, res) => {
  const deptID = req.params.id;

  const sql = "SELECT * FROM employee_salary WHERE dept_id = ?";

  try {
    const data = await db.query(sql, [deptID]);

    res.json(data[0]);
  } catch (error) {
    console.error("Veritabani hatasi", error);
    res.json({ message: "Veritabani hatasi!", error: error });
  }
};
