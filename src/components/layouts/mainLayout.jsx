import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import LeftAside from './leftAside';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = ({ auth, children }) => {

  const navigate = useNavigate();


  const onLogout = (e) => {
    auth
      .logout()
      .then(() => {
        navigate("/")
      })
  }

  useEffect(() => {
    // login.jsx에서처럼 사용자의 auth state가 변경되면 이동되도록 하자.
    auth.onAuthChange(user => {
      !user && navigate("/login");
    })
  });

  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <LeftAside />
        {/* <Header onLogout={onLogout} /> */}
        <div className="page-content-wrapper">
          <div className="page-content">
          <Outlet />
          </div>

        <Footer />
        </div>
      </div>
    </div>
  );
};


const MainLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} element={
      <MainLayout>
        <Component />
      </MainLayout>
    } />
  )
};
export default MainLayoutRoute;

