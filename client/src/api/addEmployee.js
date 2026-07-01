import API from "./axiosInstance";

export const addEmployee = async (emp) => {
  const {
    employeeName,
    employeeSurname,
    employeeBirth,
    employeeGender,
    employeeOccup,
    employeeDeptID,
  } = emp;

  if (!employeeName || !employeeSurname) {
    return alert("Isim ve Soyisim bos birakilamaz!");
  }

  if (!employeeDeptID) {
    return alert("Departman bulunamadi!");
  }

  try {
    const response = await API.post("/employees/add", {
      employeeName,
      employeeSurname,
      employeeBirth,
      employeeGender,
      employeeDeptID,
      employeeOccup,
    });

    if (response.status == 201) {
      alert("Calisan basariyla eklendi!");

      window.location.reload();
    }
  } catch (error) {
    console.error("Calisan eklenirken hata olustu:", error);
    alert("Calisan eklenemedi!");
  }
};
