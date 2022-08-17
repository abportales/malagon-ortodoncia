import { NavLink } from "react-router-dom"
import { useFetchImg } from "../../hooks/useFetchImg"

export const Header = () => {

    const storagePaths = [
        useFetchImg('utilities/logo-consul.png').url,
        useFetchImg('utilities/logo-itero.png').url,
        useFetchImg('utilities/logoinvisalign.png').url,
        useFetchImg('utilities/logo-badge-platinum.png').url,
    ]

    return (
        <>
            <div className="container-fluid" id='menu'>
                <div className="row pt-2">

                    <div className="col-md-12 col-lg-3 offset-lg-1 d-flex justify-content-center pb-2 align-items-center" >
                        <NavLink to="/">
                            <img className=" img-fluid"
                                src={storagePaths[0]} 
                                alt="logo"
                                width="auto" height="300" style={{ maxHeight: 150 }} />
                        </NavLink>
                    </div>

                    <div className="col-lg-2 d-flex justify-content-center align-items-center" id="hideOnDevice">
                        <NavLink to="/itero">
                            <img className="pt-3 img-fluid imgHead-itero"
                                src={storagePaths[1]} 
                                alt="iTero"
                                width="130" height="auto" style={{ maxHeight: 100 }} />
                        </NavLink>
                    </div>

                    <div className="col-lg-3 d-flex justify-content-center align-items-center" id="hideOnDevice">
                        <NavLink to="/invisalign">
                            <img className="img-fluid"
                                src={storagePaths[2]} 
                                alt="invisalign"
                                width="auto" height="100" />
                        </NavLink>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center align-items-center" id="hideOnDevice">
                        <span className="text-white mx-1 border border-secondary rounded ps-2 titleHead-clinic">
                            CLÍNICA&nbsp;<img className="img-fluid rounded-3 imgHead-clinic bg-white"
                                src={storagePaths[3]} 
                                alt="badge-platinum"
                                width="110" height="auto" />
                        </span >
                    </div>
                </div>
            </div>
        </>
    )
}
