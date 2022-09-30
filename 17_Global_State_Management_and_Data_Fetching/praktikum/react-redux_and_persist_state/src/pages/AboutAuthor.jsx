import { useState } from "react";
import { Sidebar } from "../components/Sidebar"
import { Icon } from "@iconify/react";

export const AboutAuthor = () =>{
    const [sidebarTrigger, setSidebarTrigger] = useState(false);

    const toggleSidebar = (e) =>{
        e.preventDefault();
        setSidebarTrigger(!sidebarTrigger);
    }

    const aboutNav = [
        {
            title: 'Home',
            route: '/',
        },
        {
            title: 'About App',
            route: '/about/about-app',
        },
        {
            title: 'About Author',
            route: '/about/about-author',
        }
    ]

    return(
        <>
        <button className="btn-trigger" onClick={toggleSidebar}>
            <Icon icon='fa6-solid:bars' width='60' height='40' />
        </button>
        {<Sidebar 
            data={aboutNav}
            sidebarTrigger={sidebarTrigger} 
            toggleSidebar={toggleSidebar}
        />}
        <div className="container h-full">
            <h1 className="heading">About the Author</h1>
            <p className="content">This App was developed by Anang Khoirul Fadli, a self-taught web developer and technical writer.</p>
        </div>
        </>
    )
}