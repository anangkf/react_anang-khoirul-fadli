import { useState } from "react";
import { Sidebar } from "../components/Sidebar"
import { Icon } from "@iconify/react";

export const AboutApp = () =>{
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
            <h1 className="heading">About the App</h1>
            <p className="content">In this app, you can add, delet, submit and edit items. To edit items simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.</p>
        </div>
        </>
    )
}