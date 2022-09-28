import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const navLink = [
        {
            key: 'quick-start',
            title: 'Quick Start',
            path: '/quick-start'
        },
        {
            key: 'redux-app-structure',
            title: 'Redux App Structure',
            path: '/redux-app-structure'
        }
    ]
  return (
    <div className='sidebar'>
        <nav>
            <ul>
                {navLink.map(item =>{
                    return(
                        <li key={item.key}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                isActive ? 'navlink-active' : 'navlink'
                                }
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
      
    </div>
  )
}

export default Sidebar
