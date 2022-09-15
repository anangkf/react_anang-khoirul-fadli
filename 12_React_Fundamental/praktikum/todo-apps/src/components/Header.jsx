import headerStyles from '../Header.module.css'

const Header = (props) =>{

    return(
        <div className={headerStyles.headerWrapper}>
            <h1>{props.title}</h1>
        </div>
    )
}
export default Header;