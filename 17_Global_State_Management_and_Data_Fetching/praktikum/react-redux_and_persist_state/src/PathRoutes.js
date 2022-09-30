import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { AboutApp } from "./pages/AboutApp";
import { AboutAuthor } from "./pages/AboutAuthor";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const PathRoutes = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/about/about-app' element={<AboutApp />} />
                <Route path='/about/about-author'  element={<AboutAuthor />}/>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </Router>
        </>
    )
}