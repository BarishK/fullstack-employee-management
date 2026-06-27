import axios from "axios";
import { deleteEmployee } from "../api/deleteEmployee";

export default function EmployeeCard(employee) {
  const { employee_id, first_name, last_name, birth_date, gender } =
    employee.employee;

  const handleDelete = async () => {
    deleteEmployee(employee_id, first_name);
  };

  return (
    <div className="bg-slate-200 rounded-md p-4 flex flex-col md:flex-row text-center gap-5">
      <div className="flex-1 flex flex-col md:flex-row items-center md:gap-10">
        <div className="md:w-50">
          <p>{first_name + " " + last_name}</p>
        </div>
        <div className="md:w-50">
          <p>
            {new Date(birth_date).toLocaleDateString("tr-TR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div>
          <p>{gender}</p>
        </div>
      </div>
      <div>
        <button
          className="p-2 rounded-md bg-red-700 text-white hover:cursor-pointer hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
