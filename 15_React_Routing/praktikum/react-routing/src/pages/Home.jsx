import React from "react";
import { useState } from "react";
import '../main.css';
import { Icon } from '@iconify/react';
import TodoLogo from '../assets/img/todo-logo.png';
import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";
import { Sidebar } from "../components/Sidebar";

export const Home = () =>{
    const [sidebarTrigger, setSidebarTrigger] = useState(false);

    const toggleSidebar = (e) =>{
        e.preventDefault();
        setSidebarTrigger(!sidebarTrigger);
    }

    const homeNav = [
        {
            title: 'Home',
            route: '/'
        },
        {
            title: 'About',
            route: '/about'
        },
    ]

    return(
        <>
        <button className="btn-trigger" onClick={toggleSidebar}>
            <Icon icon='fa6-solid:bars' width='60' height='40' />
        </button>
        {<Sidebar 
            data={homeNav}
            sidebarTrigger={sidebarTrigger} 
            toggleSidebar={toggleSidebar}
        />}
        <div className="container">
            <div className="header">
                <img 
                    className="header-logo"
                    src={TodoLogo} 
                    alt="todo-logo" 
                />
                <Header 
                    title={'TODO'} 
                    subtitle={'Plan. Do. Done'}
                />
            </div>
            <TodoList />
        </div>
        </>
    )
};