import { useEffect } from "react";
import { getDepartmentByID, getDepartments } from "../api/getDepartments";
import { useState } from "react";

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [employeesByDept, setEmployeesByDept] = useState([]);

  const fetchAndSetData = async () => {
    const response = await getDepartments();

    setDepartments(response.data);
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);

  const handleClick = async (deptID) => {
    const result = await getDepartmentByID(deptID);

    setEmployeesByDept(result.data);
  };

  return (
    <div>
      <div className="flex flex-col gap-10">
        <h3 className="text-2xl font-extrabold">Departments</h3>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5">
          <ul className="flex flex-col gap-1">
            {departments?.map((dept) => {
              return (
                <li
                  className="hover:bg-slate-600 hover:cursor-pointer bg-slate-200 p-2 w-50"
                  onClick={() => {
                    handleClick(dept.department_id);
                  }}
                  key={dept.department_id}
                >
                  {dept.department_name}
                </li>
              );
            })}
          </ul>
          <div className="flex-1 flex flex-col w-full h-screen bg-slate-200">
            {employeesByDept.map((emp) => {
              return (
                <div
                  key={emp.employee_id}
                  className="m-3 p-3 rounded-lg bg-slate-400"
                >
                  <p>
                    <span className="font-bold">Employee:</span>
                    {emp.first_name} {emp.last_name}
                  </p>
                  <p>
                    <span className="font-bold">Occupation:</span>
                    {emp.occupation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
