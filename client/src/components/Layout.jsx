import { Outlet } from "react-router";
import Sidebar from "./Siderbar";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 bg-slate-300">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
