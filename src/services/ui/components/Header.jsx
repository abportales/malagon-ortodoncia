import { NavLink } from "react-router-dom"

export const Header = () => {

    return (
        <>
            <div className="container-fluid" id='menu'>
                <div className="row pt-2">

                    <div className="col-md-12 col-lg-3 offset-lg-1 d-flex justify-content-center pb-2" >
                        <NavLink to="/">
                            <img className=" img-fluid align-self-center"
                                src="/assets/img/utilities/logo-consul.png" alt="logo"
                                width="auto" height="300" style={{ maxHeight: 150 }} />
                        </NavLink>
                    </div>

                    <div className="col-lg-2 d-flex justify-content-center" id="hideOnDevice">
                        <NavLink to="/itero">
                            <img className="pt-3 img-fluid align-self-center imgHead-itero"
                                src="/assets/img/utilities/logo-itero.png" alt="iTero"
                                width="130" height="auto" style={{ maxHeight: 100 }} />
                        </NavLink>
                    </div>

                    <div className="col-lg-3 d-flex justify-content-center" id="hideOnDevice">
                        <NavLink to="/invisalign">
                            <img className="img-fluid align-self-center"
                                src="/assets/img/utilities/logoinvisalign.png" alt="invisalign"
                                width="auto" height="100" />
                        </NavLink>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center" id="hideOnDevice">
                        <span className="text-white mx-2 align-self-center border border-secondary rounded px-2 titleHead-clinic">
                            CLÍNICA&nbsp;<img className="img-fluid rounded align-self-center ps-1 imgHead-clinic"
                                src="/assets/img/utilities/logo-badge-platinum.png" alt="badge-platinum"
                                width="110" height="auto" />
                        </span >
                    </div>
                </div>
            </div>
        </>
    )
}
