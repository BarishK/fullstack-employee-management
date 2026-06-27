import { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import axios from "axios";
import AddEmployee from "../components/AddEmployee";
import { getEmployees } from "../api/getEmployees";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  const [addEmployee, setAddEmployee] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {}
    };

    fetchEmployees();
  }, []);

  const handleClick = () => {
    addEmployee ? setAddEmployee(false) : setAddEmployee(true);
  };

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-2xl font-extrabold">Employees</h3>
      <div className="flex flex-col gap-5">
        <div>
          <button
            onClick={handleClick}
            className="p-2 rounded-md bg-slate-600 text-white hover:cursor-pointer hover:bg-slate-500"
          >
            Add Employee
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {addEmployee ? <AddEmployee /> : null}
          {employees?.map((employee) => {
            return (
              <EmployeeCard employee={employee} key={employee.employee_id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
