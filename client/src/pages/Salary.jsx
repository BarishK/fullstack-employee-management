import { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import axios from "axios";
import EmployeeSalaryCard from "../components/EmployeeSalaryCard";
import { getSalaries } from "../api/getSalaries";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const data = await getSalaries();

        setEmployees(data);
      } catch (error) {
        console.error("Hata olustu!", error);
      }
    };

    fetchSalaries();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-2xl font-extrabold">Salaries</h3>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          {employees?.map((employee) => {
            return (
              <EmployeeSalaryCard
                employee={employee}
                key={employee.employee_id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
