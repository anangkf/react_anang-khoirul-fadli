import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import TodoListPage from './pages/TodoListPage';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/quick-start' element={<Home />} />
          <Route path='/redux-app-structure' element={<Home />} />
          <Route path='/todo-list' element={<TodoListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes;
