import logo from '../assets/logo.png'
import styles from '../componants/Header.module.css'
import { NavLink } from 'react-router-dom';
const Header = () => {

    return(
        <>
            <nav className={`navbar navbar-expand-lg ${styles.header}`}>
                <div className={`container-fluid  ${styles.container}`}>

                    <NavLink className="navbar-brand" href="#">
                        <img src={logo} alt="logo" className={styles.logo}/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={`nav-item`}>
                                <NavLink className={({isActive}) => isActive ? `nav-link ${styles.activeLink}` : `nav-link active`} to="/" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? `nav-link ${styles.activeLink}` : `nav-link active`} to="/" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? `nav-link ${styles.activeLink}` : `nav-link active`} to="/">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? `nav-link ${styles.activeLink}` : `nav-link active`} to="/">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? `nav-link ${styles.activeLink}` : `nav-link active`} to="/">Contact</NavLink>
                            </li>
                        </ul>

                        <button className={`btn ${styles.buyBtn}`}>Buy Now</button>
    
                    </div>
                </div>
            </nav>
        
        </>
    );
}

export default Header;