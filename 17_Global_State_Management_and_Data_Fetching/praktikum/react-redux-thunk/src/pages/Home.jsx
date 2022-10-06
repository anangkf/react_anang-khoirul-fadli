import React from "react";
import '../main.css';
import { Icon } from '@iconify/react';
import TodoLogo from '../assets/img/todo-logo.png';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TodoList } from "../components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import {toggleSidebar} from '../store/features/sidebar/sidebarSlice'

export const Home = () =>{
    const dispatch = useDispatch()
    const sidebarTrigger = useSelector(state => state.sidebar) 

    const handleSidebar = (e) =>{
        e.preventDefault();
        dispatch(toggleSidebar())
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
        <button className="btn-trigger" onClick={handleSidebar}>
            <Icon icon='fa6-solid:bars' width='60' height='40' />
        </button>
        {<Sidebar 
            data={homeNav}
            sidebarTrigger={sidebarTrigger} 
            handleSidebar={handleSidebar}
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