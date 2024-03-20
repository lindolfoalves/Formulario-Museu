import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";

const AdminLayout = () => {
    return (
        <div className={'flex w-full h-screen'}>
            <HeaderAdmin />
            <main className={'w-full p-6'}>
                <h1>Admin</h1>
                <button>text</button>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
