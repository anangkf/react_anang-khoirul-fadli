import { useState } from "react";
import { Sidebar } from "../components/Sidebar"
import { Icon } from "@iconify/react";

export const About = () =>{
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
            <h1 className="heading">About</h1>
            <p className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quam nihil aliquid ut. Sit blanditiis asperiores nisi voluptatem laboriosam doloremque aut assumenda, possimus deleniti cumque quas fugit, error commodi eligendi? Doloremque quisquam soluta, nemo ea iure quidem mollitia unde deleniti!</p>
            <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorem repellat quasi ipsam eius tempore commodi praesentium accusamus sapiente maxime accusantium impedit provident, ratione blanditiis neque earum velit natus aperiam mollitia. Veritatis, debitis.</p>
        </div>
        </>
    )
}