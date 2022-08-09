import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const [collapse, setCollapse] = useState(true)

    const onCollapse = () => {
        setCollapse(!collapse)
    }

    return (
        <>
            <div className="container-fluid" id='menu'>
                <div className="d-flex justify-content-center" id='navBarContainer'>
                    <nav className="navbar navbar-expand-lg" >
                        <NavLink
                            className={({ isActive }) => `navbar-brand nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/"
                            onClick={onCollapse}
                        >
                            Inicio
                        </NavLink>
                        <button
                            className="navbar-toggler bg-secondary"
                            type="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={onCollapse}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={collapse ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'}>
                            <div className="navbar-nav">
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Tratamientos
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark dropdown-content" >
                                        <li><NavLink className="dropdown-item" id="dropItem" to="/invisalign" onClick={onCollapse}>
                                            Invisalign
                                        </NavLink>
                                        </li>
                                        <li><NavLink className="dropdown-item" id="dropItem" to="/metalbrackets" onClick={onCollapse}>
                                            Brackets American Orthodontics
                                        </NavLink>
                                        </li>
                                        <li><NavLink className="dropdown-item" id="dropItem" to="/empowerbrackets" onClick={onCollapse}>
                                            Brackets Empower2
                                        </NavLink>
                                        </li>
                                    </ul>
                                </div>

                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/patients"
                                    onClick={onCollapse}
                                >
                                    Para Pacientes
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/itero"
                                    onClick={onCollapse}
                                >
                                    iTero
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/frequency"
                                    onClick={onCollapse}
                                >
                                    Preguntas frecuentes
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/about"
                                    onClick={onCollapse}
                                >
                                    ¿Quiénes Somos?
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/contact"
                                    onClick={onCollapse}
                                >
                                    Contáctanos
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}