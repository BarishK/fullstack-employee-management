import { useState } from "react";
import axios from "axios";

export default function EmployeeSalaryCard(employee) {
  const { employee_id, first_name, last_name, occupation, salary } =
    employee.employee;

  const [newSalary, setNewSalary] = useState("");

  const handleUpdateSalary = async () => {
    if (!newSalary) {
      return alert("Lutfen yeni bir maas girin!");
    }

    try {
      const response = await axios.put(
        `http://localhost:5001/salary/${employee_id}`,
        {
          salary: newSalary,
        },
      );

      if (response.status === 200) {
        alert(`${first_name} adlı çalışanın maaşı güncelləndi!`);
        setNewSalary(""); // İşlem bitince inputu temizle

        window.location.reload();
      }
    } catch (error) {
      console.error("Maaş güncellenirken hata verdi:", error);
      alert("Maaş guncellenemedi.");
    }
  };

  return (
    <div className="bg-slate-200 rounded-md p-4 flex flex-col md:flex-row text-center gap-5">
      <div className="flex-1 flex flex-col md:flex-row items-center md:gap-10">
        <div className="md:w-50">
          <p>{first_name + " " + last_name}</p>
        </div>
        <div className="md:w-50">
          <p>{occupation}</p>
        </div>
        <div className="flex items-center">
          <span>Salary:</span>
          <p>{salary}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Edit salary..."
          value={newSalary}
          onChange={(e) => setNewSalary(e.target.value)}
          className="bg-slate-300 border rounded-sm"
        />
        <button
          onClick={handleUpdateSalary}
          className="p-2 rounded-md bg-green-700 text-white hover:cursor-pointer hover:bg-green-600"
        >
          Edit Salary
        </button>
      </div>
    </div>
  );
}
