import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

function AdminLayout() {
    return (
        <div className="flex min-h-screen">

            <Sidebar />

            <main className="flex-1 bg-[#F5E6D3]">
                <Outlet />
            </main>

        </div>
    );
}

export default AdminLayout;