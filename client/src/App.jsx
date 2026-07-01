import { BrowserRouter, Routes, Route } from "react-router";
import Salary from "./pages/Salary";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="salary" element={<Salary />} />
          <Route path="employees" element={<Employees />} />
          <Route path="departments" element={<Departments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
