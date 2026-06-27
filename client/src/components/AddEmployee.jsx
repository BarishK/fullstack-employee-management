import axios from "axios";
import { useState } from "react";

export default function AddEmployee() {
  const [employeeName, setEmployeeName] = useState();
  const [employeeSurname, setEmployeeSurname] = useState();
  const [employeeBirth, setEmployeeBirth] = useState();
  const [employeeGender, setEmployeeGender] = useState("Male");

  const handleAddEmployee = async () => {
    if (!employeeName || !employeeSurname) {
      return alert("Isim ve Soyisim bos birakilamaz!");
    }

    try {
      const response = await axios.post("http://localhost:5001/employees/add", {
        employeeName,
        employeeSurname,
        employeeBirth,
        employeeGender,
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

  return (
    <div className="bg-slate-200 rounded-md p-4 flex flex-col md:flex-row text-center gap-5 mb-10">
      <div className="flex-1 flex flex-col md:flex-row items-center md:gap-10">
        <div className="md:w-50">
          <input
            type="text"
            placeholder="Name..."
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="bg-slate-300 p-1 border rounded-sm"
          />
        </div>
        <input
          type="text"
          placeholder="Surname..."
          value={employeeSurname}
          onChange={(e) => setEmployeeSurname(e.target.value)}
          className="bg-slate-300 p-1 border rounded-sm"
        />
        <div className="md:w-50">
          <input
            type="date"
            placeholder="Birth Date..."
            value={employeeBirth}
            onChange={(e) => setEmployeeBirth(e.target.value)}
            className="bg-slate-300 p-1 border rounded-sm"
          />
        </div>
        <div className="flex items-center">
          <select
            name="gender"
            id="gender"
            value={employeeGender}
            onChange={(e) => {
              setEmployeeGender(e.target.value);
            }}
            className="bg-slate-300 p-1 border rounded-lg w-30"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handleAddEmployee}
          className="p-2 rounded-md bg-green-700 text-white hover:cursor-pointer hover:bg-green-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}
