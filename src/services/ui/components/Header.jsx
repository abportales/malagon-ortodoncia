
export const Header = () => {

    return (
        <>
            <div className="container-fluid d-flex justify-content-center" id='menu'>
                <div className="row pt-2">
                    <div className="col-4">
                        <img className="pt-2 img-fluid" src="/assets/img/utilities/logo.jpg" alt="logo" width={400} />
                    </div>
                    <div className="col-4">
                        <img className="col-4" src="/assets/img/utilities/logoinvisalign.png" alt="invisalign" width={200} />
                        <span className="col-4 text-white mx-2 fs-3">CLINICA</span >
                        <img className="col-4 img-fluid" src="/assets/img/utilities/logo-badge-platinum.png" alt="badge-platinum" width={20} />
                    </div>
                    <div className="col-4">
                        <img className="pt-3 img-fluid" src="/assets/img/utilities/logo-itero.png" alt="iTero" width={100} />
                    </div>
                </div>
            </div>
        </>
    )
}
