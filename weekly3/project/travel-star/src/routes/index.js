// const { BrowserRouter, Routes, Route } = require("react-router-dom")
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Layout from '../components/Layout';
import Customers from '../pages/Customers';

const SetupRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path='/customers' element={<Customers />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default SetupRoutes;