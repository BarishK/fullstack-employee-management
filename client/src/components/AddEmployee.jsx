import axios from "axios";
import { useState } from "react";
import { addEmployee } from "../api/addEmployee";

export default function AddEmployee() {
  const [employeeName, setEmployeeName] = useState();
  const [employeeSurname, setEmployeeSurname] = useState();
  const [employeeBirth, setEmployeeBirth] = useState();
  const [employeeGender, setEmployeeGender] = useState("Male");
  const [employeeDeptID, setEmployeeDeptID] = useState();
  const [employeeOccup, setEmployeeOccup] = useState();

  const handleAddEmployee = async (emp) => {
    addEmployee(emp);
  };

  return (
    <div className="bg-slate-200 rounded-md p-4 flex flex-col lg:flex-row gap-5 mb-10">
      <div className="flex-1 flex flex-col lg:flex-row gap-5 items-center flex">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="bg-slate-300 p-1 border rounded-sm"
          />
          <input
            type="text"
            placeholder="Surname"
            value={employeeSurname}
            onChange={(e) => setEmployeeSurname(e.target.value)}
            className="bg-slate-300 p-1 border rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-3">
          <select
            name="dept"
            id="dept"
            value={employeeDeptID}
            onChange={(e) => {
              setEmployeeDeptID(e.target.value);
            }}
            className="bg-slate-300 p-1 border rounded-lg"
          >
            <option value="null">Select Department</option>
            <option value="1">Parks and Recreation</option>
            <option value="2">Animal Control</option>
            <option value="3">Public Works</option>
            <option value="4">Healthcare</option>
            <option value="5">Library</option>
            <option value="6">Finance</option>
          </select>
          <input
            type="text"
            placeholder="Occupation"
            value={employeeOccup}
            onChange={(e) => setEmployeeOccup(e.target.value)}
            className="bg-slate-300 p-1 border rounded-sm"
          />
        </div>

        <input
          type="date"
          placeholder="Birth Date"
          value={employeeBirth}
          onChange={(e) => setEmployeeBirth(e.target.value)}
          className="bg-slate-300 p-1 border rounded-sm"
        />

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
      <div className="self-center">
        <button
          onClick={() =>
            handleAddEmployee({
              employeeName,
              employeeSurname,
              employeeBirth,
              employeeGender,
              employeeOccup,
              employeeDeptID,
            })
          }
          className="px-4 py-2 rounded-md bg-green-700 text-white hover:cursor-pointer hover:bg-green-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}
