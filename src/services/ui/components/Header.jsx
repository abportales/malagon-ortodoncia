import { NavLink } from "react-router-dom"
import { GrowingSpiner } from "../../components/generics";
import { useFetchImg } from "../../hooks/useFetchImg"

export const Header = () => {


    const logo = useFetchImg('utilities/logo-consul.png');
    const itero = useFetchImg('utilities/logo-itero.png');
    const invis = useFetchImg('utilities/logoinvisalign.png');
    const badge = useFetchImg('utilities/logo-badge-platinum.png');


    return (
        <>
            <div className="container-fluid" id='menu'>
                <div className="row pt-2">
                    <div className="col-md-12 col-lg-3 offset-lg-1 d-flex justify-content-center pb-2 align-items-center">
                        <NavLink to="/">
                            {
                                logo.isLoading ? (<GrowingSpiner />) :
                                    <img className=" img-fluid"
                                        src={logo.url}
                                        alt="logo"
                                        width="auto" height="300" style={{ maxHeight: 150 }} />
                            }
                        </NavLink>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center" id="hideOnDevice">
                        <NavLink to="/itero">
                            {
                                itero.isLoading ? (<GrowingSpiner />) :
                                    <img className="pt-3 img-fluid imgHead-itero"
                                        src={itero.url}
                                        alt="iTero"
                                        width="130" height="auto" style={{ maxHeight: 100 }} />
                            }
                        </NavLink>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center align-items-center" id="hideOnDevice">
                        <NavLink to="/invisalign">
                            {
                                invis.isLoading ? (<GrowingSpiner />) :
                                    <img className="img-fluid"
                                        src={invis.url}
                                        alt="invisalign"
                                        width="auto" height="100" />
                            }
                        </NavLink>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center align-items-center" id="hideOnDevice">
                        {
                            badge.isLoading ? (<GrowingSpiner />) :
                                <span className="text-white mx-1 border border-secondary rounded ps-2 titleHead-clinic">
                                    CLÍNICA&nbsp;<img className="img-fluid rounded-3 imgHead-clinic bg-white"
                                        src={badge.url}
                                        alt="badge-platinum"
                                        width="110" height="auto" />
                                </span>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
