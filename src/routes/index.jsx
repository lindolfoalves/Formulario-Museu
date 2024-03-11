import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import NotFoundPage from '../pages/publicPages/NotFoundPage';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/authPages/LoginPage';
import PageUsers from '../pages/adminPages/PageUsers';
import ProtectRoute from './ProtectRoute';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import logo from '../assets/imagens/logo_secult_-_.jpg'; // Import the logo image file



const PageHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const PageUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Logo = styled.img`
  height: 10rem;
  margin-bottom: 2rem;
`;

const Ways = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>

        <Route path='/dashboard' element={<ProtectRoute />}>
          <Route path='' element={<PageLayout />}>
            <Route index element={<PageHome />} />
            <Route path='usuarios' element={<PageUsersContainer />}>
              <Route index element={<PageUsers />} />
            </Route>
          </Route>
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <PageContainer>
        <Logo src={logo} alt="Logo do Governo do Estado do Ceará" /> {/* Add the logo to the page container */}
        <MdOutlineKeyboardArrowRight size={50} color="#1b9aaa" />
      </PageContainer>
    </Router>
  );
};

export default Ways;