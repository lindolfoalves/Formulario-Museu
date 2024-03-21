import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import NotFoundPage from '../pages/publicPages/NotFoundPage';
import AuthLayout from '../layouts/AuthLayout';
import AdminLayout from '../layouts/AdminLayout';
import ProtectRoute from './ProtectRoute';
import DashboardPage from '../pages/DashboardPage';
import PageUsersContainer from '../pages/adminPages/PageUsersContainer';

const Ways = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />} />
        <Route path='/dashboard/*' element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path='usuarios' element={<PageUsersContainer />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;
