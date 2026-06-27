import { NavLink } from "react-router";

// ICONS
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
      <div className="md:block md:w-64 bg-slate-600 text-white border-r border-slate-200 p-4">
        <div className="xs:hidden md:block md:text-xl md:font-bold md:mb-8">
          Company Panel
        </div>
        <nav className="flex flex-col gap-2">
          <NavLink to="/" className="p-2 rounded hover:bg-slate-100 ">
            <FaHome className="xs:block md:hidden" />
            <span className="xs:hidden md:block">Home</span>
          </NavLink>
          <NavLink to="/employees" className="p-2 rounded hover:bg-slate-100 ">
            <FaPeopleGroup className="xs:block md:hidden" />
            <span className="xs:hidden md:block">Employees</span>
          </NavLink>
          <NavLink to="/salary" className="p-2 rounded hover:bg-slate-100 ">
            <FaHandHoldingUsd className="xs:block md:hidden" />
            <span className="xs:hidden md:block">Salary</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}
