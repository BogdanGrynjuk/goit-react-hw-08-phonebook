import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import { refreshUser } from 'redux/auth/operations';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const ErrorPage = lazy(() => import('../pages/Error'));

const App = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(refreshUser);
  }, [dispath]);


  return (

    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='*' element={<ErrorPage />} />    
        </Route>
      </Routes>
    </>
   
  );
};

export default App;