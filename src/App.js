import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.scss';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}

export default App;
