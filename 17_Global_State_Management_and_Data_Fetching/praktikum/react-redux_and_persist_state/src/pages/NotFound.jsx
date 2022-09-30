import '../main.css'
import {Link} from 'react-router-dom'
import NotFoundIcon from '../assets/img/404-error.png'

export const NotFound = () =>{
    return(
        <div className='not-found-container'>
            <h1 className="heading">The Page You searched was Not Found!</h1>
            <img
                className='not-found-icon'
                src={NotFoundIcon} alt="not-found" 
            />
            <button className='button'>
                <Link to='/'>
                    Return Home
                </Link>
            </button>
        </div>
    )
}