import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const HeaderAdmin = () => {
    const location = useLocation();
    const [showAdminInfo, setShowAdminInfo] = useState(false);
    const [showUserData, setShowUserData] = useState(false);

    const handleDashboardClick = () => {
        setShowAdminInfo(true);
        setShowUserData(false);
    };

    const handleUserClick = () => {
        setShowAdminInfo(false);
        setShowUserData(true);
    };

    return (
        <div className="w-2 surface-200">
            <div className="logo surface-900 p-3">
                <img 
                    src="https://digitalcollege.com.br/wp-content/webp-express/webp-images/uploads/2022/05/logo-digital.png.webp"
                    alt="Digital College"
                    className="w-full"
                />
            </div>
            <nav>
                <ul>
                    <li className={'p-3'}>
                        <Link
                            to={'/dashboard'}
                            onClick={handleDashboardClick}
                            className={'flex align-items-center gap-2 text-color hover:text-primary'}
                        >
                            <i className={'pi pi-home'}></i> Dashboard
                        </Link>
                    </li>
                    <li className={'p-3'}>
                        <Link
                            to={'/dashboard/usuarios'}
                            onClick={handleUserClick}
                            className={'flex align-items-center gap-2 text-color hover:text-primary'}
                        >
                            <i className={'pi pi-users'}></i> Usuários
                        </Link>
                    </li>
                </ul>
            </nav>
            {(location.pathname === '/dashboard' && showAdminInfo) && (
                <div>
                    <h1>Admin</h1>
                    <button>text</button>
                </div>
            )}
            {(location.pathname === '/dashboard/usuarios' && showUserData) && (
                <div>
                    {/* Aqui você pode renderizar os dados do usuário */}
                    {/* Por exemplo: */}
                    <label>Nome:</label>
                    <input type="text" placeholder="Digite o nome do usuário" />
                    {/* Outros campos de dados do usuário */}
                </div>
            )}
        </div>
    );
}

export default HeaderAdmin;
