import React from "react";
import '../main.css';
import TodoLogo from '../assets/img/todo-logo.png';
import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";

export const Home = () =>{
    return(
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
    )
};