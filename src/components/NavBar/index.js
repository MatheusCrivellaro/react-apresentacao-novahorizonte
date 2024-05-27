import './NavBar.css'
import {IoIosMenu} from "react-icons/io";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md nav-menu fixed-top">
            <div className="container-fluid">
                <div className="d-flex justify-content-between title-nav">
                    <a href="#sobre" className="navbar-brand">
                        <img src="/images/Logo-novaHorizonte-round.png" alt="Logo" width="30"/>
                        <span className="ms-3 title item-nav">NovaHorizonte</span>
                    </a>
                    <button className="navbar-toggler border-0 px-3" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-menu"><IoIosMenu/></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link fw-bold item-nav" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link item-nav" href="#sobre">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link item-nav" href="#contatos">Contatos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link item-nav" href="#a">Sistema</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar