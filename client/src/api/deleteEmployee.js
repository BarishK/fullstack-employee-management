import API from "./axiosInstance";

export const deleteEmployee = async (employee_id, first_name) => {
  try {
    const response = await API.delete(`/employees/delete/${employee_id}`);

    if (response.status == 200) {
      alert(`${first_name} adlı çalışan silindi!`);

      window.location.reload();
    }
  } catch (error) {
    console.error(error);
    alert("Silinemedi.");
  }
};
