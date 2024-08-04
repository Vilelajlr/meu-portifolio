import { Link } from 'react-router-dom';
import styles from './styles/Header.module.css'
import Logo from '../../img/costs_logo.png'

function Header(){
    return(
        <header className={styles.nav}>
            <nav >

                <Link to="/"><img src={Logo} alt="Logo" /></Link>
                <h1>José Leandro Vilela</h1>
                

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="projeto">Projetos</Link>
                    </li>
                    <li>
                        <Link to="contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;