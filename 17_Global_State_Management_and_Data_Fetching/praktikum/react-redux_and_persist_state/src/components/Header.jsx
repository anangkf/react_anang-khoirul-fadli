import '../main.css';

export const Header = (props) =>{
    const {title, subtitle} = props
    return(
        <div className="header-title">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}