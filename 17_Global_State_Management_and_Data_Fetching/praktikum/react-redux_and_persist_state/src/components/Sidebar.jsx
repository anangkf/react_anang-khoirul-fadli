import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Sidebar = ({sidebarTrigger, handleSidebar, data}) =>{
    return(
        <div className={sidebarTrigger ? "sidebar-active" : "sidebar"}>
            <button className="btn-trigger" onClick={handleSidebar}>
                <Icon icon='akar-icons:cross' width='60' height='40' />
            </button>
            <nav>
                <ul>
                    {data.map((val, index) =>{
                        return(
                            <li key={`${val}_${index}`}>
                                <Link to={val.route}>{val.title}</Link>
                            </li>
                        )
                    })}
                </ul>               
            </nav>
        </div>
    )
}