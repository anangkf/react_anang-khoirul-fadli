import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/quick-start' element={<Home />} />
          <Route path='/redux-app-structure' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes;
