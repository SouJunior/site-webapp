import AdminHeader from "../commons/AdminHeader"
import AdminSidebar from "../commons/AdminSidebar"

export const Admin = () => {
    return (
        <div className="h-screen w-screen bg-white flex flex-col">
            <AdminHeader />
            <AdminSidebar />
        </div>
    )
}