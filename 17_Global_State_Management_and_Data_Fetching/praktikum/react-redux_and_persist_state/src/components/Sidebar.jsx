import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Sidebar = ({sidebarTrigger, toggleSidebar, data}) =>{

    return(
        <div className={sidebarTrigger ? "sidebar-active" : "sidebar"}>
            <button className="btn-trigger" onClick={toggleSidebar}>
                <Icon icon='akar-icons:cross' width='60' height='40' />
            </button>
            <nav>
                <ul>
                    {data.map((val) =>{
                        return(
                            <li>
                                <Link to={val.route}>{val.title}</Link>
                            </li>
                        )
                    })}
                </ul>               
            </nav>
        </div>
    )
}