import { Link } from 'react-router-dom';
import styles from './header.module.css';
import image from "./image/logo.svg";

function Header() {

    return(
        <header>
            <div className={styles.container}> 
            
                <div className={styles.nav}>
                    <div className={styles.nav_img}> 
                        <img src={image} alt="logo" />
                        <p>BuhOne</p>
                    </div>
                    
                    <ul className={styles.nav_ul}>
                        <li> <Link to='/'> Главная </Link></li>
                        <li> <Link to='/service'> услуги</Link></li>
                        <li> <Link to='/about'> кейсы </Link></li>
                        <li> <Link to='/cases'> о компании </Link></li>
                        <li> <Link to='/contact'>контакты </Link></li>
                    </ul>
                </div>
           
            </div>
        </header>
    )
}

export default Header;