import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Header } from './Header';


export const Navbar = () => {

    const [collapse, setCollapse] = useState(true)

    const onCollapse = () => {
        setCollapse(!collapse)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg p-1" id='menu'>
                <div className="d-flex flex-row-reverse bd-highlight col-2">
                    <Link to="/" onClick={onCollapse}>
                        <Header />
                    </Link>
                </div>
                <div className="d-flex flex-row-reverse bd-highlight col-10">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={onCollapse}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={collapse ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'}>
                        <div
                            className="navbar-nav ms-5 me-auto mb-2 mb-lg-0"
                            onClick={onCollapse}
                        >
                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to="/"
                                onClick={onCollapse}
                            >
                                Inicio
                            </NavLink>

                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tratamientos
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" >
                                    <li><NavLink className="dropdown-item" id="dropItem" to="/invisalign" onClick={onCollapse}>
                                        Invisalign
                                    </NavLink>
                                    </li>
                                    <li><NavLink className="dropdown-item" id="dropItem" to="/damonq" onClick={onCollapse}>
                                        Damon Q
                                    </NavLink>
                                    </li>
                                    <li><NavLink className="dropdown-item" id="dropItem" to="/metalbrackets" onClick={onCollapse}>
                                        Metal Brackets
                                    </NavLink>
                                    </li>
                                </ul>
                            </div>

                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to="/patients"
                            >
                                Para Pacientes
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to="/achievements"
                            >
                                Logros
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to="/frequency"
                            >
                                Preguntas frecuentes
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to="/success"
                            >
                                Casos de éxito
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to="about"
                            >
                                ¿Quiénes Somos?
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to="/contact"
                            >
                                Contáctanos
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}