import axios from "axios";

export const deleteEmployee = async (employee_id, first_name) => {
  try {
    const response = await axios.delete(
      `http://localhost:5001/employees/delete/${employee_id}`,
    );

    if (response.status == 200) {
      alert(`${first_name} adlı çalışan silindi!`);

      window.location.reload();
    }
  } catch (error) {
    console.error(error);
    alert("Silinemedi.");
  }
};
