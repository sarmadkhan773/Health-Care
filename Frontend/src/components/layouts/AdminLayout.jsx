import Sidebar from "../../admin/Sidebar";
import AdminNavbar from "../../admin/AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 lg:ml-72">
        <AdminNavbar />

        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;